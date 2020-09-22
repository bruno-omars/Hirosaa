import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthContext } from "../../provider/AuthContextProvider";
import DefaultInput from "../Atoms/Inputs/DefaultInput";
import Default from "../Atoms/Buttons/Default";
import {
  useMessagesSubscription,
  useUserCirclesQuery,
  useInsertMessageMutation,
} from "../../generated/graphql";
import ChatCard from "../Organisms/Cards/ChatCard";

export type Input = {
  text: string;
};

const StyledForm = styled.form``;

const INITIAL_INPUT = {
  text: "",
};

const ChatPage: FC = () => {
  const [activeCircleId, setActiveCircleId] = useState<number>();
  const [inputs, setInputs] = useState<Input>(INITIAL_INPUT);

  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
  });
  const { data: messageData, loading, error } = useMessagesSubscription({
    variables: {
      circleId: activeCircleId!,
    },
    skip: !activeCircleId,
  });
  const [insertMessage] = useInsertMessageMutation();

  const activeCircle = userData?.user?.CircleUsers.find(
    (circleUser) => circleUser.Circle.id === activeCircleId
  )?.Circle;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const targetInput = { [e.target.name]: e.target.value };
    setInputs((prevInputs) => {
      return { ...prevInputs, ...targetInput };
    });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await insertMessage({
        variables: {
          objects: [
            {
              ...inputs,
              circle_id: activeCircleId,
              user_id: me?.id,
            },
          ],
        },
      });
      setInputs(INITIAL_INPUT);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    //最初は一番上のcircleIdをセット
    if (!activeCircleId && !userLoading) {
      setActiveCircleId(userData?.user?.CircleUsers[0]?.Circle.id);
    }
  }, [userLoading, userData]);

  if (userLoading) return <>loading</>;
  return (
    <>
      <ChatCard setActiveCircleId={setActiveCircleId} circle={activeCircle} />
      {messageData?.Message?.map((message) => (
        <div>{message.text}</div>
      ))}
      <DefaultInput
        handleChange={handleChange}
        placeholder="コメントを入力"
        name="text"
        value={inputs.text}
      />
      <Default clickHandler={handleSubmit}>送信</Default>
    </>
  );
};

export default ChatPage;
