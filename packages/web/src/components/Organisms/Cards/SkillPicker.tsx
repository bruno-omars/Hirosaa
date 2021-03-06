import { Grid } from "@chakra-ui/react";
import React, { ComponentProps, FC } from "react";
import SkillCard from "../../Molecules/Cards/SkillCard";

type Props = {
  skills: Array<ComponentProps<typeof SkillCard>["skill"]>;
  selectedSkills: number[];
  setSkills: React.Dispatch<React.SetStateAction<number[]>>;
};

const SkillPicker: FC<Props> = (props) => {
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
  if (props.skills) {
    const currentID = props.skills.map((e) => {
      console.log(typeof e.id);
    });
  }

  const skills = props.skills?.map((skill) => {
    return (
      <SkillCard
        handleClick={handleClick}
        key={skill.id}
        bgColor={
          selectedSkills && selectedSkills.includes(skill.id)
            ? "#50B6BB"
            : "white"
        }
        color={
          selectedSkills && selectedSkills.includes(skill.id)
            ? "white"
            : "black"
        }
        skill={skill}
      />
    );
  });

  return (
    <Grid gridTemplateColumns="repeat(auto-fill, 130px)" gridAutoRows="140px">
      {skills}
    </Grid>
  );
};

export default SkillPicker;
