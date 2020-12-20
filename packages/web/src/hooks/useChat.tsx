import React, { ComponentProps, FormEvent, useEffect, useState } from "react";
import ChatCard from "../components/Organisms/Cards/ChatCard";
import {
  MessagesQuery,
  useInsertMessageMutation,
  useMessagesQuery,
  useNewMessagesSubscription,
  useUserCirclesQuery,
} from "../generated/graphql";
import { useAuthContext } from "../provider/AuthContextProvider";

const INITIAL_INPUT = {
  text: "",
};

// TODO: 汎用的なチャットのためのhookにする(現在アクティブなサークルなどの状態も持っている)

export const useChat = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [dataChangedFlag, setdataChangedFlag] = useState(false);
  const [activeCircleId, setActiveCircleId] = useState<number>();
  const { me } = useAuthContext();
  const [inputs, setInputs] = useState<
    ComponentProps<typeof ChatCard>["inputs"]
  >(INITIAL_INPUT);
  const [messages, setMessages] = useState<MessagesQuery["messages"]>();

  /**
   * サイドバーに表示する自分が所属するサークル一覧を取得
   */
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
    onCompleted: (data) => {
      // 最初に所属したサークルをactiveCircleにセットする
      const myFirstJoiningCircleId = data?.user?.circleUsers[0]?.circle.id;
      setActiveCircleId(myFirstJoiningCircleId);
    },
  });

  const [insertMessage] = useInsertMessageMutation();

  const {
    data: messageData,
    fetchMore,
    updateQuery,
    refetch,
  } = useMessagesQuery({ variables: { circleId: activeCircleId || 0 } });

  useEffect(() => {
    const initialMessages = messageData?.messages;
    setMessages(initialMessages);
  }, [messageData]);

  useEffect(() => {
    refetch({ circleId: activeCircleId });
  }, [activeCircleId]);

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

  const handleFetchMore = async (messages: MessagesQuery["messages"]) => {
    const res = await fetchMore({
      variables: {
        last_received_ts: messages[messages.length - 1].timestamp,
      },
    });
    setMessages([...messages, ...res.data.messages]);
    setdataChangedFlag(!dataChangedFlag);
  };

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

  return {
    userLoading,
    activeCircleId,
    setActiveCircleId,
    activeCircle,
    messages,
    inputs,
    setInputs,
    onChange,
    handleSubmit,
    hasNewMessage,
    setHasNewMessage,
    handleFetchMore,
    isFirstLoad,
  };
};
