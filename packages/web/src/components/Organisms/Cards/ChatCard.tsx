import React, { FC, ComponentProps, useRef } from "react";
import styled from "styled-components";
import { Circles, Messages, Users } from "../../../generated/graphql";
import ChatSidebar from "../../Molecules/Sidebar/ChatSidebar";
import PeopleNum from "../../Atoms/Icon/PeopleNum";
import { COLOR } from "../../../constants/color";
import IconRightInput from "../../Atoms/Inputs/IconRightInput";
import { ReactComponent as MessageSendIcon } from "../../../assets/icons/message-send.svg";
// import NewMessageButton from "../../Atoms/Buttons/NewMessageButton";
import DefaultButton from "../../Atoms/Buttons/Default";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;
  width: 90%;
  height: 90vh;
  margin-top: 20px;
`;

const Right = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Top = styled.div`
  border-bottom: 1px solid ${COLOR["BORDER_DIVIDER"]};
  height: 60px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

const StyledTitle = styled.h2`
  display: inline-block;
`;

const StyledSendIcon = styled(MessageSendIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
`;

const MessageContainer = styled.ul`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  overflow: scroll;
`;

const MessageLi = styled.li`
  margin-bottom: 4px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ConversationItem = styled.div`
  margin-left: 8px;
  max-width: 85%;
`;

const MessageContent = styled.div`
  background-color: #f7f7f7;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 20px;
  padding: 8px 16px;
`;

const Typography = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-wap;
  word-break: break-all;
`;

const NewMessageButton = styled(DefaultButton)`
  padding: 4px 8px;
  border-radius: 50px;
  width: 200px;
  height: 40px;
  font-size: 14px;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  margin: auto;
`;

export type Input = {
  text: string;
};

type Props = {
  activeCircleId: number | undefined;
  setActiveCircleId: React.Dispatch<React.SetStateAction<number | undefined>>;
  circle?: Pick<Circles, "id" | "name" | "avatar">;
  messages:
    | (Pick<Messages, "timestamp" | "text" | "id"> & {
        users: Pick<Users, "id" | "avatar" | "name">;
      })[]
    | undefined;
  inputs: Input;
  setInputs: React.Dispatch<Input>;
  handleSubmit: ComponentProps<typeof IconRightInput>["iconClickHandler"];
  onChange: ComponentProps<typeof IconRightInput>["onChange"];
  hasNewMessage: boolean;
  setHasNewMessage: React.Dispatch<boolean>;
};

const ChatCard: FC<Props> = ({
  messages,
  inputs,
  onChange,
  handleSubmit,
  setActiveCircleId,
  activeCircleId,
  circle,
  hasNewMessage,
  setHasNewMessage,
  ...rest
}) => {
  const messageEndRef = useRef<HTMLHeadingElement>(null);
  const onClickNewMessage = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setHasNewMessage(false);
  };
  return (
    <Card>
      <ChatSidebar
        setActiveCircleId={setActiveCircleId}
        activeCircleId={activeCircleId}
      />
      <Right>
        <Top>
          <StyledTitle>{circle?.name}</StyledTitle>
          <PeopleNum count={30} />
        </Top>
        {hasNewMessage && (
          <NewMessageButton onClick={onClickNewMessage} bgColor="ORANGE">
            新規メッセージがあります。
          </NewMessageButton>
        )}
        <MessageContainer>
          {messages
            ? messages.map((message) => (
                <MessageLi key={message.id}>
                  <MessageWrapper>
                    <ConversationItem>
                      <MessageContent>
                        <Typography>{message.text}</Typography>
                      </MessageContent>
                    </ConversationItem>
                  </MessageWrapper>
                </MessageLi>
              ))
            : "やりとりがありません。何かメッセージを送ってみましょう"}
          <div ref={messageEndRef} />
        </MessageContainer>
        <Bottom>
          <IconRightInput
            icon={
              <StyledSendIcon
                fill={inputs.text ? COLOR.LIGHT_GREEN : COLOR.BORDER_TEXT_INPUT}
              />
            }
            iconClickHandler={handleSubmit}
            onChange={onChange}
            value={inputs.text}
            placeholder=""
            name="text"
          />
        </Bottom>
      </Right>
    </Card>
  );
};

export default ChatCard;
