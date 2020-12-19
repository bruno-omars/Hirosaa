import React, { ComponentProps, FC } from "react";
import styled from "styled-components";
import {
  Circles,
  Skills,
  Sub_Categories,
  Users,
} from "../../../generated/graphql";
import { Avatar, Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import DefaultTag from "../../Atoms/Tags/DefaultTag";
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

const StyledCircleAvatar = styled(Avatar)`
  align-self: center;
  cursor: default;
`;

const StyledDesc = styled.p`
  color: ${COLOR.TEXT_DARK};
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

type Circle = Pick<
  Circles,
  "avatar" | "name" | "recruitTitle" | "mainRole" | "whatWeWillDo"
>;

// TODO: 多分ここ出てきた型はコンポーネととして分離できる
// SubCategoryList, Owner
type SubCategories = Pick<Sub_Categories, "name"> | null;
type Owner = Pick<Users, "id" | "name" | "avatar"> | null;

type Props = {
  circle: Circle & {
    circleSkills: { skill: ComponentProps<typeof SkillCard>["skill"] }[];
  } & {
    subCategories?: SubCategories;
  } & { owner?: Owner };
};

const CircleDetailCard: FC<Props> = ({ circle }) => {
  let history = useHistory();
  const handleToDetail = () => {
    history.push({
      pathname: `/user-detail/${circle.owner?.id}`,
    });
  };

  return (
    <Box boxShadow={{ base: "xs", md: "lg" }} p={10} mb={7}>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "0.2fr 1fr" }}
        gridTemplateRows={{ base: "0.2fr 1fr 0.2fr 0.2fr", md: "1fr 0.7fr" }}
        width="100%"
      >
        <StyledCircleAvatar src={circle?.avatar} size="lg" />
        <Box>
          <Heading as="h2" fontWeight="0.5rem" fontSize="1.5rem" mb={3}>
            {circle.name}
          </Heading>
          <Text>{circle.recruitTitle}</Text>
          {circle.subCategories?.name && (
            <DefaultTag name={circle.subCategories.name} />
          )}
        </Box>

        <PeopleNum count={30} />

        <Flex alignItems="center">
          <Avatar
            mr={3}
            size="sm"
            cursor="pointer"
            onClick={handleToDetail}
            src={circle?.owner?.avatar ?? ""}
          />
          <StyledLeaderName>{circle?.owner?.name}</StyledLeaderName>
        </Flex>
      </Grid>
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
            <SkillCard skill={circleSkill.skill} />
          ))}
        </StyledGrid>
      </StyledBlock>
    </Box>
  );
};

export default CircleDetailCard;
