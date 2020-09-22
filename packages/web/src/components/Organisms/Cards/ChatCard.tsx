import React, { FC } from "react";
import styled from "styled-components";
import { Circle } from "../../../generated/graphql";
import ChatSidebar from "../../Molecules/Sidebar/ChatSidebar";
import PeopleNum from "../../Atoms/Icon/PeopleNum";
import { COLOR } from "../../../constants/color";
import IconRightInput from "../../Atoms/Inputs/IconRightInput";
import { ReactComponent as MessageSendIcon } from "../../../assets/icons/message-send.svg";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  height: 70%;
  display: flex;
`;

const Top = styled.div`
  padding: 8px 20px;
  border-bottom: 1px solid ${COLOR["BORDER_DIVIDER"]};
`;

const StyledTitle = styled.h2`
  display: inline-block;
`;

const StyledSendIcon = styled(MessageSendIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
`;

type Props = {
  setActiveCircleId: React.Dispatch<React.SetStateAction<number | undefined>>;
  circle?: Pick<Circle, "id" | "name" | "avatar">;
};

const ChatCard: FC<Props> = (props) => {
  return (
    <Card>
      <ChatSidebar setActiveCircleId={props.setActiveCircleId} />
      <div>
        <Top>
          <StyledTitle>{props.circle?.name}</StyledTitle>
          <PeopleNum count={30} />
        </Top>

        <IconRightInput
          icon={<StyledSendIcon />}
          iconClickHandler={() => {}}
          handleChange={() => {}}
          placeholder=""
        />
      </div>
    </Card>
  );
};

export default ChatCard;
