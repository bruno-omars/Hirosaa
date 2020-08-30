import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { Skill } from "../../../generated/graphql";

type Props = {
  skills:
    | ({
        __typename?: "Skill" | undefined;
      } & Pick<Skill, "id" | "name" | "avatar">)[]
    | undefined;
  selectedSkills: number[];
  setSkills: React.Dispatch<React.SetStateAction<number[]>>;
};

const SkillCards: FC<Props> = (props) => {
  const { selectedSkills, setSkills } = props;
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    let newSelectedSkills: number[];
    const id = Number(e.currentTarget.id);
    if (selectedSkills.includes(id)) {
      newSelectedSkills = selectedSkills.filter((num) => num !== id);
    } else {
      newSelectedSkills = [...selectedSkills, id];
    }
    setSkills(newSelectedSkills);
  };

  const skills =
    props.skills &&
    props.skills.map((skill) => {
      return (
        <SkillCard
          handleClick={handleClick}
          id={skill.id.toString()}
          key={skill.id}
          name={skill.name}
        >
          <img height="50px" src={skill.avatar} />
        </SkillCard>
      );
    });

  return <>{skills}</>;
};

export default SkillCards;
