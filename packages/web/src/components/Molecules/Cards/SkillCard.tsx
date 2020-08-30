import React, { FC } from "react";
import styled from "styled-components";

const StyledSkillCard = styled.div`
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 20px;
  width: 70px;
`;

type Props = {
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  name: string;
  id: string;
};

const SkillCard: FC<Props> = (props) => {
  return (
    <StyledSkillCard onClick={props.handleClick} id={props.id}>
      {props.children}
      {props.name}
    </StyledSkillCard>
  );
};

export default SkillCard;
