import React, { FC, useState, ComponentProps, FormEvent } from "react";
import { useAuthContext } from "../../provider/AuthContextProvider";
import {
  useMessagesQuery,
  useNewMessagesSubscription,
  useUserCirclesQuery,
  useInsertMessageMutation,
} from "../../generated/graphql";
import ChatCard from "../Organisms/Cards/ChatCard";

const INITIAL_INPUT = {
  text: "",
};

const ChatPage: FC = () => {
  const [activeCircleId, setActiveCircleId] = useState<number>();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [dataChangedFlag, setdataChangedFlag] = useState(false);

  const [inputs, setInputs] = useState<
    ComponentProps<typeof ChatCard>["inputs"]
  >(INITIAL_INPUT);

  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
    onCompleted: (data) => {
      const myFirstJoiningCircleId = data?.user?.circleUsers[0]?.circle.id;
      setActiveCircleId(myFirstJoiningCircleId);
    },
  });

  const { data: messageData, fetchMore, updateQuery } = useMessagesQuery();
  const messages = messageData?.messages ?? [];

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
        updateQuery((previousResult) => {
          const newMessages = data.subscriptionData.data?.messages;
          console.warn("newMessages", newMessages);
          if (!newMessages) {
            return previousResult;
          }
          const newData = {
            ...previousResult,
            messages: [...newMessages, ...previousResult.messages],
          };
          return newData;
        });

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

  const handleFetchMore = async (messages: any) => {
    console.warn("messages", messages);
    await fetchMore({
      variables: {
        last_received_ts: messages[messages.length - 1].timestamp,
      },
    });
    setdataChangedFlag(!dataChangedFlag);
  };

  const [insertMessage] = useInsertMessageMutation();

  const activeCircle = userData?.user?.circleUsers.find(
    (circleUser) => circleUser.circle.id === activeCircleId
  )?.circle;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const targetInput = { [e.target.name]: e.target.value };
    setInputs({ ...inputs, ...targetInput });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.text) return;
    try {
      await insertMessage({
        variables: {
          objects: [
            {
              ...inputs,
              circleId: activeCircleId,
              userId: me?.id,
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
        handleFetchMore={handleFetchMore}
        isFirstLoad={isFirstLoad}
      />
    </>
  );
};

export default ChatPage;
