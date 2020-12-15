import React, { ComponentProps, FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";

type Props = {
  skills: Array<ComponentProps<typeof SkillCard>["skill"]>;
};

const SkillCardList: FC<Props> = ({ skills }) => {
  return (
    <>
      {skills?.map((skill) => (
        <SkillCard skill={skill} />
      ))}
    </>
  );
};

export default SkillCardList;
