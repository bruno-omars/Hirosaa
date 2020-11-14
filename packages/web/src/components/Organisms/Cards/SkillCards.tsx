import React, { FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";
import { Skills } from "../../../generated/graphql";

type Props = {
  skills:
    | ({
        __typename?: "Skills" | undefined | string;
      } & Pick<Skills, "id" | "name" | "avatar">)[]
    | undefined;
  selectedSkills?: number[];
  setSkills?: React.Dispatch<React.SetStateAction<number[]>>;
};

const SkillCards: FC<Props> = (props) => {
  const { selectedSkills, setSkills } = props;
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    let newSelectedSkills: number[];
    const id = Number(e.currentTarget.id);
    if (selectedSkills && setSkills) {
      if (selectedSkills.includes(id)) {
        newSelectedSkills = selectedSkills.filter((num) => num !== id);
      } else {
        newSelectedSkills = [...selectedSkills, id];
      }
      setSkills(newSelectedSkills);
    }
  };
  if (props.skills) {
    const currentID = props.skills.map((e) => {
      console.log(typeof e.id);
    });
  }

  const skills =
    props.skills &&
    props.skills.map((skill) => {
      return (
        <SkillCard
          handleClick={handleClick}
          id={skill.id.toString()}
          key={skill.id}
          name={skill.name}
          bgColor={
            selectedSkills && selectedSkills.includes(Number(skill.id))
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
