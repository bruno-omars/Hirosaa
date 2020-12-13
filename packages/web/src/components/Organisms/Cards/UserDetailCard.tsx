import React, { FC, useMemo } from "react";
import styled from "styled-components";
import {
  Users,
  Skills,
  Circles,
  Maybe,
  Circle_Users_Aggregate_Fields,
  UserQuery,
} from "../../../generated/graphql";
import Avatar from "../../Atoms/Avatar/Default";
import { COLOR } from "../../../constants/color";
import { CircleList } from "../CircleList";
import SkillCard from "../../Molecules/Cards/SkillCard";
import SkillCardList from "./SkillCardList";
import { MyObjectArrayCircles } from "../../../types/circle";
import { MyObjectArraySkills } from "../../../types/skill";
import { MyUser } from "../../../types/user";

type Props = {
  user: MyUser & {
    userSkills: MyObjectArraySkills;
    circleUsers: MyObjectArrayCircles;
  };
};

const StyledCard = styled.div`
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  width: 70%;
  margin-bottom: 40px;
`;

const StyledTop = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledBlock = styled.div`
  margin-top: 40px;
`;

const StyledSubTitle = styled.h3`
  color: ${COLOR.TEXT_LIGHT};
  font-weight: 0.4em;
  margin-bottom: 8px;
`;

const StyledDesc = styled.p`
  color: ${COLOR.TEXT_DARK};
`;

type StyleGrid = {
  height: number;
};

const StyledGrid = styled.div<StyleGrid>`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(${({ height }) => height}px, max-content);
`;

const StyledCircleList = styled.div`
  margin-top: 20px;
`;

const UserDetailCard: FC<Props> = ({ user }) => {
  const skillCardHeight = useMemo(
    () => user && Math.ceil(user?.userSkills.length / 4) * 75,
    [user]
  );

  if (!user) return <p>ユーザーが存在しません</p>;

  const skills = user.userSkills.map((userSkill) => userSkill.skill);

  return (
    <StyledCard>
      <StyledTop>
        <Avatar src={(user && user.avatar) || ""} size={66} />
        <h2>{user.name}</h2>
      </StyledTop>
      <hr />
      <StyledBlock>
        <StyledSubTitle>自己紹介</StyledSubTitle>
        <StyledDesc>{user.introduction}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>興味のあること</StyledSubTitle>
        <StyledDesc>{user.interestedIn}</StyledDesc>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>スキル一覧</StyledSubTitle>
        <StyledGrid height={skillCardHeight || 75}>
          <SkillCardList skills={skills} />
        </StyledGrid>
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>所属サークル一覧</StyledSubTitle>
        <StyledCircleList>
          <CircleList circles={user.circleUsers} />
        </StyledCircleList>
      </StyledBlock>
    </StyledCard>
  );
};

export default UserDetailCard;
