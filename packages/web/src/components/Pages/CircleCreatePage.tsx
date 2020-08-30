import React, { FC, useState, useEffect } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import {
  useInsertCircleMutation,
  Skill_Constraint,
  Skill_Update_Column,
} from "../../generated/graphql";

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const RightButton = styled.div`
  align-self: start;
`;

export type Input = {
  name: string;
  recruit_title: string;
  what_we_will_do: string;
  main_role: string;
};

const CircleCreatePage: FC = () => {
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [selectedCategory, setCategory] = useState<number>(0);
  const [inputs, setInputs] = useState<Input>({
    name: "",
    recruit_title: "",
    what_we_will_do: "",
    main_role: "",
  });

  const [buttonText, setText] = useState("作成する");

  const Skills = selectedSkills.map((skill: number) => ({
    Skill: {
      data: { id: skill, avatar: "", name: "" },
      on_conflict: {
        constraint: Skill_Constraint.SkillPkey,
        update_columns: [Skill_Update_Column.Id],
      },
    },
  }));

  const [insertCircle, { data }] = useInsertCircleMutation();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    insertCircle({
      variables: {
        objects: [
          {
            ...inputs,
            sub_category_id: selectedCategory,
            CicleSkills: {
              data: [...Skills],
            },
          },
        ],
      },
    });
  };

  useEffect(() => {
    if (data?.insert_Circle) {
      setText("作成しました");
    }
  }, [data]);

  return (
    <StyledPage>
      <CircleCreateCard
        inputs={inputs}
        setInputs={setInputs}
        selectedSkills={selectedSkills}
        setSkills={setSkills}
        setCategory={setCategory}
      />
      <RightButton>
        <RoundedButton clickHandler={handleClick} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </StyledPage>
  );
};

export default CircleCreatePage;
