import { Box, Flex, Img } from "@chakra-ui/react";
import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";
import { Skills } from "../../../generated/graphql";

type Props = {
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  bgColor?: keyof typeof COLOR;
  skill: Pick<Skills, "id" | "avatar" | "name">;
};

const SkillCard: FC<Props> = ({ skill, handleClick, bgColor }) => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      boxShadow="md"
      bgColor="white"
      cursor="pointer"
      p={30}
      w={100}
      h={120}
      onClick={handleClick}
      id={skill.id.toString()}
    >
      <Img h={50} src={skill.avatar} />
      {skill.name}
    </Flex>
  );
};

export default SkillCard;
