import React, { ComponentProps, FC, useMemo } from "react";
import styled from "styled-components";
import { Users, Maybe } from "../../../generated/graphql";
import { Avatar } from "../../Atoms/Avatar/avatar";
import { COLOR } from "../../../constants/color";
import { CircleList } from "../CircleList";
import SkillCard from "../../Molecules/Cards/SkillCard";
import SkillCardList from "./SkillCardList";
import { CircleCard } from "../../Molecules/Cards/CircleCard";
import { Box } from "@chakra-ui/react";

type User = Maybe<
  Pick<Users, "id" | "avatar" | "name" | "introduction" | "interestedIn">
>;

type Props = {
  user: User & {
    userSkills: { skill: ComponentProps<typeof SkillCard>["skill"] }[];
    circleUsers: { circle: ComponentProps<typeof CircleCard>["circle"] }[];
  };
};

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

const UserDetailCard: FC<Props> = ({ user }) => {
  const skills = useMemo(
    () => user.userSkills.map((userSkill) => userSkill.skill),
    [user.userSkills]
  );
  const circles = useMemo(
    () => user.circleUsers.map((circleUser) => circleUser.circle),
    [user.circleUsers]
  );

  if (!user) return <p>ユーザーが存在しません</p>;

  return (
    <Box
      boxShadow={{ base: "xs", md: "lg" }}
      p={10}
      mb={7}
      w={{ base: "95%", md: "80%" }}
    >
      <StyledTop>
        <Avatar src={(user && user.avatar) || ""} size="lg" />
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
        <SkillCardList skills={skills} />
      </StyledBlock>
      <StyledBlock>
        <StyledSubTitle>所属サークル一覧</StyledSubTitle>
        <Box mt={3}>
          <CircleList circles={circles} />
        </Box>
      </StyledBlock>
    </Box>
  );
};

export default UserDetailCard;
