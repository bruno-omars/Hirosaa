import React, { FC } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  Circles,
  Circle_Users_Aggregate_Fields,
  Maybe,
} from "../../../generated/graphql";
import CircleButton from "../../Atoms/Buttons/CircleButton";
import { ReactComponent as People } from "../../../assets/icons/people.svg";
import { TextWithDots } from "../../Atoms/TextWithDots";
import { Grid } from "@chakra-ui/react";

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
  circle: Pick<Circles, "id" | "name" | "avatar" | "recruitTitle"> & {
    circleUsers_aggregate: { __typename?: "circle_users_aggregate" } & {
      aggregate?: Maybe<
        { __typename?: "circle_users_aggregate_fields" } & Pick<
          Circle_Users_Aggregate_Fields,
          "count"
        >
      >;
    };
  };
};

export const CircleCard: FC<Props> = ({ circle }) => {
  let history = useHistory();
  const handleToDetail = () => {
    history.push({
      pathname: "/circle-detail",
      state: { circleId: circle.id },
    });
  };

  return (
    <Grid
      gridTemplateColumns="50px 0.9fr 70px"
      gridTemplateRows="0.4fr 1fr"
      alignItems="center"
      boxShadow="base"
      cursor="pointer"
      mb="50px"
      p="20px"
      minH="200px"
      onClick={handleToDetail}
    >
      <CircleButton onClick={() => {}} shadowDepth={"NONE"}>
        <StyledImage src={circle.avatar} />
      </CircleButton>
      <TextWithDots as="h3" w="100%">
        {circle.name}
      </TextWithDots>
      <PeopleNum>
        <People height="20px" width="20px" />
        {circle.circleUsers_aggregate.aggregate?.count}
      </PeopleNum>
      <Description>{circle.recruitTitle}</Description>
    </Grid>
  );
};
