import { Grid, SimpleGrid } from "@chakra-ui/react";
import React, { ComponentProps, FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";

type Props = {
  skills: Array<ComponentProps<typeof SkillCard>["skill"]>;
};

const SkillCardList: FC<Props> = ({ skills }) => {
  return (
    <Grid gridTemplateColumns="repeat(auto-fill, 130px)" gridAutoRows="140px">
      {skills.map((skill) => (
        <SkillCard skill={skill} />
      ))}
    </Grid>
  );
};

export default SkillCardList;
