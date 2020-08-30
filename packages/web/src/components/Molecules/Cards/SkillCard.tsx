import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  bgColor?: keyof typeof COLOR;
  name: string;
  id: string;
};

const StyledSkillCard = styled.div<Pick<Props, "bgColor">>`
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  background-color: ${({ bgColor = "WHITE" }) => COLOR[bgColor]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 20px;
  width: 70px;
`;

const SkillCard: FC<Props> = (props) => {
  return (
    <StyledSkillCard
      onClick={props.handleClick}
      id={props.id}
      bgColor={props.bgColor}
    >
      {props.children}
      {props.name}
    </StyledSkillCard>
  );
};

export default SkillCard;
