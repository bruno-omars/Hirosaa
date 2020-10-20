import React, { FC } from "react";
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
  width: 70%;
  height: 70%;
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
`;

const Top = styled.div`
  border-bottom: 1px solid ${COLOR["BORDER_DIVIDER"]};
  width: 100%;
`;

const Buttom = styled.div`
  height: 20%;
`;

const StyledTitle = styled.h2`
  display: inline-block;
`;

const StyledSendIcon = styled(MessageSendIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
`;

const Messages = styled.div`
  width: 100%;
  height: 70%;
  padding: 10px 0;
  overflow: scroll;
`;

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
};

const ChatCard: FC<Props> = ({ messeges, ...rest }) => {
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
            ? messeges.map((message) => <div>{message.text}</div>)
            : "やりとりがありません。何かメッセージを送ってみましょう"}
        </Messages>
        <Buttom>
          <IconRightInput
            icon={<StyledSendIcon />}
            iconClickHandler={() => {}}
            handleChange={() => {}}
            placeholder=""
          />
        </Buttom>
      </Right>
    </Card>
  );
};

export default ChatCard;
