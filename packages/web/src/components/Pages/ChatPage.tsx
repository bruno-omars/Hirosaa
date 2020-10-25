import React, { FC, useState, ComponentProps } from "react";
import { useAuthContext } from "../../provider/AuthContextProvider";
import {
  useMessagesSubscription,
  useUserCirclesQuery,
  useInsertMessageMutation,
} from "../../generated/graphql";
import ChatCard from "../Organisms/Cards/ChatCard";

const INITIAL_INPUT = {
  text: "",
};

const ChatPage: FC = () => {
  const [activeCircleId, setActiveCircleId] = useState<number>();
  const [inputs, setInputs] = useState<
    ComponentProps<typeof ChatCard>["inputs"]
  >(INITIAL_INPUT);

  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
    onCompleted: (data) => {
      setActiveCircleId(data?.user?.CircleUsers[0]?.Circle.id);
    },
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

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const targetInput = { [e.target.name]: e.target.value };
    setInputs({ ...inputs, ...targetInput });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!inputs.text) return;
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

  if (userLoading) return <>loading</>;
  return (
    <ChatCard
      setActiveCircleId={setActiveCircleId}
      circle={activeCircle}
      messeges={messageData?.Message}
      inputs={inputs}
      setInputs={setInputs}
      onChange={onChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ChatPage;
