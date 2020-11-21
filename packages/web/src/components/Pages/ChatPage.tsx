import React, { FC, useState, ComponentProps } from "react";
import { useAuthContext } from "../../provider/AuthContextProvider";
import {
  useNewMessagesSubscription,
  useUserCirclesQuery,
  useInsertMessageMutation,
} from "../../generated/graphql";
import ChatCard from "../Organisms/Cards/ChatCard";
import {
  useMessagesQuery,
  NewMessagesSubscription,
} from "../../generated/graphql";

const INITIAL_INPUT = {
  text: "",
};

const ChatPage: FC = () => {
  const [activeCircleId, setActiveCircleId] = useState<number>();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [lastRecievedId, setLastReceivedId] = useState(-1);
  const [newMessages, setNewMessages] = useState<
    NewMessagesSubscription["messages"]
  >([]);

  const [inputs, setInputs] = useState<
    ComponentProps<typeof ChatCard>["inputs"]
  >(INITIAL_INPUT);

  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
    onCompleted: (data) => {
      const myFirstJoiningCircleId = data?.user?.circle_users[0]?.circle.id;
      setActiveCircleId(myFirstJoiningCircleId);
    },
  });

  const {
    data: messageSubscriptionData,
    loading,
    error,
  } = useNewMessagesSubscription({
    variables: {
      circleId: activeCircleId!,
    },
    skip: !activeCircleId,
    onSubscriptionData: (data) => {
      if (isFirstLoad) {
        setIsFirstLoad(false);
      } else {
        const messages = data.subscriptionData.data?.messages;
        setNewMessages([...newMessages, ...(messages ?? [])]);

        //他人からの新規メッセージがあったら通知
        const hasOthersMessage = data.subscriptionData.data?.messages?.find(
          (message) => message.users.id !== me?.id
        );
        if (hasOthersMessage) {
          setHasNewMessage(true);
        }
      }
    },
  });

  //TODO: ページネーション
  const { data: messageData } = useMessagesQuery({
    variables: {
      last_received_id: lastRecievedId,
      last_received_ts: setLastReceivedId,
    },
  });

  const [insertMessage] = useInsertMessageMutation();

  const activeCircle = userData?.user?.circle_users.find(
    (circle) => circle.circle.id === activeCircleId
  )?.circle;

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

  const messages = [...(messageData?.messages ?? []), ...newMessages];
  return (
    <ChatCard
      activeCircleId={activeCircleId}
      setActiveCircleId={setActiveCircleId}
      circle={activeCircle}
      messages={messages}
      inputs={inputs}
      setInputs={setInputs}
      onChange={onChange}
      handleSubmit={handleSubmit}
      hasNewMessage={hasNewMessage}
      setHasNewMessage={setHasNewMessage}
    />
  );
};

export default ChatPage;
