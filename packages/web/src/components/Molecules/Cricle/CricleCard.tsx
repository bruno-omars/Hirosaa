import React, { FC } from "react";
import styled from "styled-components";

import { Circle } from "../../../generated/graphql";
import CircleButton from "../../Atoms/Buttons/CircleButton";
import { ReactComponent as People } from "../../../assets/icons/people.svg";

const StyledCard = styled.div`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  display: grid;
  grid-template-rows: 30% 70%;
  grid-template-columns: 50px 0.9fr 70px;
  height: 200px;
  justify-content: center;
  margin-bottom: 50px;
  place-items: center;
  width: 400px;
`;

const CardTitle = styled.h3`
  font-weight: normal;
  justify-self: left;
`;

const PeopleNum = styled.div`
  align-items: center;
  color: #606060;
  display: flex;
  fill: #606060;
  font-size: 12px;
  justify-content: space-around;
  width: 80%;
`;

const Description = styled.p`
  align-self: start;
  color: #525252;
  font-size: 16px;
  grid-column-start: 1;
  grid-column-end: 4;
  justify-self: left;
`;

const StyledImage = styled.img`
  border-radius: 50px;
  height: 100%;
  width: 100%;
`;

type Props = {
  // TODO: クエリ変更したら自動でタイプ変換できるようにしたい
  circle: Pick<
    Circle,
    "id" | "name" | "avatar" | "what_we_will_do" | "to_be_required"
  >;
};

const CircleCard: FC<Props> = ({ circle }) => {
  return (
    <StyledCard>
      <CircleButton clickHandler={() => {}} shadowDepth={"NONE"}>
        <StyledImage src={circle.avatar} />
      </CircleButton>
      <CardTitle>{circle.name}</CardTitle>
      <PeopleNum>
        <People height="20px" width="20px" />
        30人
      </PeopleNum>
      <Description>{circle.what_we_will_do}</Description>
    </StyledCard>
  );
};

export default CircleCard;
