import React, { FC, useState, useEffect } from "react";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import {
  useInsertCircleMutation,
  Skills_Constraint,
  Skills_Update_Column,
} from "../../generated/graphql";
import TwoColumn from "../Templates/TwoColumn";

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

  const skills = selectedSkills.map((skill: number) => ({
    skills: {
      data: { id: skill, avatar: "", name: "" },
      on_conflict: {
        constraint: Skills_Constraint.SkillPkey,
        update_columns: [Skills_Update_Column.Id],
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
            circle_skills:{
              data: [...skills],
            }
          },
        ],
      },
    });
  };

  useEffect(() => {
    if (data?.insert_circles) {
      setText("作成しました");
    }
  }, [data]);

  return (
    <TwoColumn defaultStyle>
      <CircleCreateCard
        inputs={inputs}
        setInputs={setInputs}
        selectedSkills={selectedSkills}
        setSkills={setSkills}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
      <RightButton>
        <RoundedButton onClick={handleClick} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </TwoColumn>
  );
};

export default CircleCreatePage;
