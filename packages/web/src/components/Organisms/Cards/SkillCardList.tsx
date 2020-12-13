import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { Skills } from "../../../generated/graphql";

type Props = {
  skills: Pick<Skills, "id" | "name" | "avatar">[] | undefined;
};

const SkillCardList: FC<Props> = ({ skills }) => {
  return (
    <>
      {skills?.map((skill) => (
        <SkillCard
          name={skill.name}
          id={skill.id.toString()}
          avatar={skill.avatar}
        />
      ))}
    </>
  );
};

export default SkillCardList;
