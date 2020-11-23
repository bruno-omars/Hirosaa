import React, { FC } from "react";
import styled from "styled-components";
import {
  Circles,
  Skills,
  Sub_Categories,
  Users,
} from "../../../generated/graphql";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
import Avatar from "../../Atoms/Avatar/Default";
import PeopleNum from "../../Atoms/Icon/PeopleNum";
import { COLOR } from "../../../constants/color";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { useHistory } from "react-router-dom";

const StyledCard = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
`;

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 200px;
  grid-template-rows: 1fr 1fr;
`;

const StyledCircleAvatar = styled(Avatar)`
  grid-row: 1/3;
  align-self: center;
  cursor: default;
`;

const StyledHeader = styled.div`
  flex-direction: row;
  grid-column: 2/4;
`;

const StyledTitle = styled.h1`
  display: inline-block;
  text-align: center;
`;

const StyledCaption = styled.h2`
  margin: 0 12px;
  font-weight: normal;
  display: inline-block;
`;

const StyledDesc = styled.p`
  color: ${COLOR.TEXT_DARK};
`;

const StyledLeaderWrapper = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 20px 24px;
  align-items: center;
  justify-self: end;
`;

const StyledLeaderLabel = styled.p`
  color: ${COLOR.TEXT_LIGHT};
  grid-column: 1/3;
  font-size: 14px;
`;

const StyledLeaderName = styled.p`
  color: ${COLOR.TEXT_LIGHT};
  font-size: 21px;
`;

const StyledPeopleNum = styled(PeopleNum)`
  grid-column-start: 2;
  grid-row: 2/4;
`;

const StyledBlock = styled.div`
  margin-top: 40px;
`;

const StyledSubTitle = styled.h3`
  color: ${COLOR.TEXT_LIGHT};
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

type StyleGrid = {
  height: number;
};

const StyledGrid = styled.div<StyleGrid>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(${({ height }) => height}px, max-content);
`;

type Props = {
  circle: Pick<
    Circles,
    "avatar" | "name" | "recruit_title" | "main_role" | "what_we_will_do"
  > & {
    circle_skills: { skills: Pick<Skills, "id" | "name" | "avatar"> }[];
  } & {
    sub_categories?: Pick<Sub_Categories, "name"> | null;
  } & { owner?: Pick<Users, "id" | "name" | "avatar"> | null };
};

const CircleDetailCard: FC<Props> = ({ circle }) => {
  let history = useHistory();
  const handleToDetail = () => {
    history.push({
      pathname: `/user-detail/${circle.owner?.id}`,
    });
  };

  return (
    <StyledCard>
      <StyledTop>
        <StyledCircleAvatar src={circle.avatar || ""} size={66} />
        <StyledHeader>
          <StyledTitle>{circle.name}</StyledTitle>
          <StyledCaption>{circle.recruit_title}</StyledCaption>
          {circle.sub_categories?.name && (
            <DefaultTag name={circle.sub_categories.name} />
          )}
        </StyledHeader>

        <StyledPeopleNum count={30} />

        <StyledLeaderWrapper>
          <StyledLeaderLabel>リーダー</StyledLeaderLabel>
          <Avatar
            onClick={handleToDetail}
            src={circle.owner?.avatar ?? ""}
            size={30}
          />
          <StyledLeaderName>{circle.owner?.name}</StyledLeaderName>
        </StyledLeaderWrapper>
      </StyledTop>
      <hr />

      <StyledBlock>
        <StyledSubTitle>何をするのか</StyledSubTitle>
        <StyledDesc>{circle.what_we_will_do}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>主な役割</StyledSubTitle>
        <StyledDesc>{circle.main_role}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>使用する技術やアプリ</StyledSubTitle>
        <StyledGrid height={Math.ceil(circle.circle_skills.length / 4) * 85}>
          {circle.circle_skills?.map((circleSkill) => (
            <SkillCard
              name={circleSkill.skills.name}
              id={circleSkill.skills.id.toString()}
              avatar={circleSkill.skills.avatar}
            />
          ))}
        </StyledGrid>
      </StyledBlock>
    </StyledCard>
  );
};

export default CircleDetailCard;
