import React, { FC, useState, useEffect } from "react";
import { useAuthContext } from "../../provider/AuthContextProvider";
import {
  useMessagesSubscription,
  useUserCirclesQuery,
} from "../../generated/graphql";

const ChatPage: FC = () => {
  const [circleId, setCircleId] = useState<number>();
  const { me } = useAuthContext();
  const { data: userData, loading: userLoading } = useUserCirclesQuery({
    variables: { id: me?.id! },
    skip: !me?.id,
  });

  useEffect(() => {
    //最初は一番上のcircleIdをセット
    if (!circleId && !userLoading) {
      setCircleId(userData?.User[0]?.CircleUsers[0]?.Circle.id);
    }
  }, [userLoading, userData]);

  const { data: messageData, loading, error } = useMessagesSubscription({
    variables: {
      circleId: circleId!,
    },
    onSubscriptionData: ({ subscriptionData }) => console.log(subscriptionData),
    skip: !circleId,
  });

  return (
    <>
      <h1>チャットページ</h1>
      {messageData?.Message?.map((message) => (
        <div>{message.text}</div>
      ))}
    </>
  );
};

export default ChatPage;
