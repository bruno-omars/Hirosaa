import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";
import { Skills } from "../../../generated/graphql";

type Props = {
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  bgColor?: keyof typeof COLOR;
  skill: Pick<Skills, "id" | "avatar" | "name">;
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

const SkillCard: FC<Props> = ({ skill, handleClick, bgColor }) => {
  return (
    <StyledSkillCard
      onClick={handleClick}
      id={skill.id.toString()}
      bgColor={bgColor}
    >
      <img height="50px" src={skill.avatar} />
      {skill.name}
    </StyledSkillCard>
  );
};

export default SkillCard;
