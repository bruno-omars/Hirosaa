import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CircleCreateCard from "../Organisms/Cards/CircleCreateCard";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import {
  useCircleQuery,
  useUpdateCirlceMutation,
  useInsertCircleSkillMutation,
  useDeleteCircleSkillMutation,
} from "../../generated/graphql";
import { useLocation, useHistory } from "react-router-dom";

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const RightButton = styled.div`
  align-self: start;
`;

type Input = {
  name: string;
  recruit_title: string;
  what_we_will_do: string;
  main_role: string;
};

type Params = {
  circleId: number;
};

const CircleEditPage: React.FC = () => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;
  const history = useHistory();

  const redirectToDetail = () => {
    setTimeout(() => {
      history.push({
        pathname: "/circle-detail",
        state: { circleId },
      });
    }, 2000);
  };

  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [initSkills, setInitSkills] = useState<number[]>([]);
  const [selectedCategory, setCategory] = useState<number>(0);
  const [inputs, setInputs] = useState<Input>({
    name: "",
    recruit_title: "",
    what_we_will_do: "",
    main_role: "",
  });
  const [buttonText, setText] = useState("更新する");

  const { data: circleData, loading, error } = useCircleQuery({
    variables: {
      id: circleId,
    },
  });

  useEffect(() => {
    if (!loading && !error) {
      const circle = circleData?.circle;
      if (circle) {
        setInputs({
          name: circle.name || "",
          recruit_title: circle.recruit_title || "",
          what_we_will_do: circle.what_we_will_do || "",
          main_role: circle.main_role || "",
        });
        const skills = circle.CicleSkills.map((skill) => skill.Skill.id) || [];
        const category = circle.SubCategory?.id;
        setSkills(skills);
        setInitSkills(skills);
        console.log(category);
        if (!category) {
          console.log("categoryが選択されていません。選択してください");
          return;
        }
        setCategory(category);
      }
    }
  }, [circleData]);

  const [updateCircle, { data: updateCircleData }] = useUpdateCirlceMutation();
  const [
    insertCircleSkill,
    { data: insertCircleSkillData },
  ] = useInsertCircleSkillMutation();
  const [
    deleteCircleSkill,
    { data: deleteCircleSkillData },
  ] = useDeleteCircleSkillMutation();

  useEffect(() => {
    // TODO(Ropital): 正確に条件分岐する
    if (
      updateCircleData?.update_Circle ||
      insertCircleSkillData?.insert_CircleSkill ||
      deleteCircleSkillData?.delete_CircleSkill
    ) {
      setText("更新しました");
    }
  }, [updateCircleData, insertCircleSkillData]);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const deletedSkills = initSkills.filter(
      (id) => !selectedSkills.includes(id)
    );
    const addedSkills = selectedSkills.filter((id) => !initSkills.includes(id));
    addedSkills.forEach((id) => {
      insertCircleSkill({
        variables: {
          circleId,
          skillId: id,
        },
      });
    });
    deletedSkills.forEach((id) => {
      deleteCircleSkill({
        variables: {
          circleId,
          skillId: id,
        },
      });
    });
    updateCircle({
      variables: {
        id: circleId,
        inputs: {
          ...inputs,
          sub_category_id: selectedCategory,
        },
      },
    });

    redirectToDetail();
  };

  return (
    <StyledPage>
      <CircleCreateCard
        inputs={inputs}
        setInputs={setInputs}
        selectedSkills={selectedSkills}
        setSkills={setSkills}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
      />
      <RightButton>
        <RoundedButton onClick={handleUpdate} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </StyledPage>
  );
};

export default CircleEditPage;
