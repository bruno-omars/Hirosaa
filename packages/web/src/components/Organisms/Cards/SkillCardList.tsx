import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { MySkills } from "../../../types/skill";

type Props = {
  skills: MySkills;
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
