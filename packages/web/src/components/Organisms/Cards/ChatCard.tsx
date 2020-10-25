import React, { FC, ComponentProps } from "react";
import styled from "styled-components";
import { Circle, Message, User } from "../../../generated/graphql";
import ChatSidebar from "../../Molecules/Sidebar/ChatSidebar";
import PeopleNum from "../../Atoms/Icon/PeopleNum";
import { COLOR } from "../../../constants/color";
import IconRightInput from "../../Atoms/Inputs/IconRightInput";
import { ReactComponent as MessageSendIcon } from "../../../assets/icons/message-send.svg";

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
`;

const Top = styled.div`
  border-bottom: 1px solid ${COLOR["BORDER_DIVIDER"]};
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

const Messages = styled.ul`
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

export type Input = {
  text: string;
};

type Props = {
  setActiveCircleId: React.Dispatch<React.SetStateAction<number | undefined>>;
  circle?: Pick<Circle, "id" | "name" | "avatar">;
  messeges:
    | ({
        __typename?: "Message" | undefined;
      } & Pick<Message, "timestamp" | "text" | "id"> & {
          User: {
            __typename?: "User" | undefined;
          } & Pick<User, "id" | "avatar" | "name">;
        })[]
    | undefined;
  inputs: Input;
  setInputs: React.Dispatch<Input>;
  handleSubmit: ComponentProps<typeof IconRightInput>["iconClickHandler"];
  onChange: ComponentProps<typeof IconRightInput>["onChange"];
};

const ChatCard: FC<Props> = ({ messeges, onChange, handleSubmit, ...rest }) => {
  return (
    <Card>
      <ChatSidebar setActiveCircleId={rest.setActiveCircleId} />
      <Right>
        <Top>
          <StyledTitle>{rest.circle?.name}</StyledTitle>
          <PeopleNum count={30} />
        </Top>
        <Messages>
          {messeges
            ? messeges.map((message) => (
                <MessageLi>
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
        </Messages>
        <Bottom>
          <IconRightInput
            icon={<StyledSendIcon />}
            iconClickHandler={handleSubmit}
            onChange={onChange}
            placeholder=""
            name="text"
          />
        </Bottom>
      </Right>
    </Card>
  );
};

export default ChatCard;
