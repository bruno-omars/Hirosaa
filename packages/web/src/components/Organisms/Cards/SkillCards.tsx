import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { Skill } from "../../../generated/graphql";

type Props = {
  skills:
    | ({
        __typename?: "Skill" | undefined;
      } & Pick<Skill, "id" | "name" | "avatar">)[]
    | undefined;
};

const SkillCards: FC<Props> = (props) => {
  const skills =
    props.skills &&
    props.skills.map((skill) => {
      return (
        <SkillCard name={skill.name} key={skill.id}>
          <img height="50px" src={skill.avatar} />
        </SkillCard>
      );
    });

  return <>{skills}</>;
};

export default SkillCards;
