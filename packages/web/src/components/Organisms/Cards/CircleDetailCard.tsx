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
import media from "styled-media-query";

const StyledCard = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
`;

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 80px 200px;
  grid-template-rows: 1fr 0.7fr 0.7fr;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 0.6fr 0.6fr;
  `}
`;

const StyledCircleAvatar = styled(Avatar)`
  align-self: center;
  cursor: default;
`;

const StyledHeader = styled.div`
  ${media.greaterThan("medium")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
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
  display: flex;

  ${media.greaterThan("medium")`
    grid-row-start: 3;
  `}
`;

const StyledLeaderName = styled.p`
  color: ${COLOR.TEXT_LIGHT};
  font-size: 21px;
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
    "avatar" | "name" | "recruitTitle" | "mainRole" | "whatWeWillDo"
  > & {
    circleSkills: { skill: Pick<Skills, "id" | "name" | "avatar"> }[];
  } & {
    subCategories?: Pick<Sub_Categories, "name"> | null;
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
        <StyledCircleAvatar src={circle?.avatar} size={66} />
        <StyledHeader>
          <StyledTitle>{circle.name}</StyledTitle>
          <StyledCaption>{circle.recruitTitle}</StyledCaption>
          {circle.subCategories?.name && (
            <DefaultTag name={circle.subCategories.name} />
          )}
        </StyledHeader>

        <PeopleNum count={30} />

        <StyledLeaderWrapper>
          <Avatar
            onClick={handleToDetail}
            src={circle?.owner?.avatar ?? ""}
            size={30}
          />
          <StyledLeaderName>{circle?.owner?.name}</StyledLeaderName>
        </StyledLeaderWrapper>
      </StyledTop>
      <hr />

      <StyledBlock>
        <StyledSubTitle>何をするのか</StyledSubTitle>
        <StyledDesc>{circle.whatWeWillDo}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>主な役割</StyledSubTitle>
        <StyledDesc>{circle.mainRole}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>使用する技術やアプリ</StyledSubTitle>
        <StyledGrid height={Math.ceil(circle.circleSkills.length / 4) * 85}>
          {circle.circleSkills?.map((circleSkill) => (
            <SkillCard
              name={circleSkill.skill.name}
              id={circleSkill.skill.id.toString()}
              avatar={circleSkill.skill.avatar}
            />
          ))}
        </StyledGrid>
      </StyledBlock>
    </StyledCard>
  );
};

export default CircleDetailCard;
