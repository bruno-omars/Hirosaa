import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { Skill } from "../../../generated/graphql";

type Props = {
  skills:
    | ({
        __typename?: "Skill" | undefined;
      } & Pick<Skill, "id" | "name" | "avatar">)[]
    | undefined;
  selectedSkills?: number[];
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const SkillCards: FC<Props> = (props) => {
  const { handleClick, selectedSkills } = props;

  const skills = props.skills?.map((skill) => {
    return (
      <SkillCard
        handleClick={handleClick}
        id={skill.id.toString()}
        key={skill.id}
        name={skill.name}
        bgColor={
          selectedSkills && selectedSkills.includes(skill.id)
            ? "LIGHT_GREEN"
            : "WHITE"
        }
        avatar={skill.avatar}
      />
    );
  });

  return <>{skills}</>;
};

export default SkillCards;
