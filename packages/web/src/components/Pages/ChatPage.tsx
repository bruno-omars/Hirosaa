import React, { FC } from "react";
import ChatCard from "../Organisms/Cards/ChatCard";
import { useChat } from "../../hooks/useChat";

const ChatPage: FC = () => {
  const {
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
  } = useChat();

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
