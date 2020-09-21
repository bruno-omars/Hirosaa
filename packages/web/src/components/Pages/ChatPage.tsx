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

export type Input = {
  text: string;
};

const StyledForm = styled.form``;

const INITIAL_INPUT = {
  text: "",
};

const ChatPage: FC = () => {
  const [circleId, setCircleId] = useState<number>();
  const [inputs, setInputs] = useState<Input>(INITIAL_INPUT);

  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
  });

  const [insertMessage] = useInsertMessageMutation();

  useEffect(() => {
    //最初は一番上のcircleIdをセット
    if (!circleId && !userLoading) {
      setCircleId(userData?.user?.CircleUsers[0]?.Circle.id);
    }
  }, [userLoading, userData]);

  const { data: messageData, loading, error } = useMessagesSubscription({
    variables: {
      circleId: circleId!,
    },
    skip: !circleId,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
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
              circle_id: circleId,
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

  if (userLoading) return <>loading</>;
  return (
    <>
      <h1>チャットページ</h1>
      {messageData?.Message?.map((message) => (
        <div>{message.text}</div>
      ))}
      <DefaultInput
        handleChange={handleChange}
        placeholder="コメントを入力"
        name="text"
      />
      <Default clickHandler={handleSubmit}>送信</Default>
    </>
  );
};

export default ChatPage;
