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
import TwoColumn from "../Templates/TwoColumn";
import { extractAdded, extractRemoved } from "../../utils/filtering";

const RightButton = styled.div`
  align-self: start;
`;

type Input = {
  name: string;
  recruitTitle: string;
  whatWeWillDo: string;
  mainRole: string;
};

type Params = {
  circleId: number;
};

const CircleEditPage: React.FC = () => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;
  const history = useHistory();
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [initSkills, setInitSkills] = useState<number[]>([]);
  const [selectedCategory, setCategory] = useState<number>(0);
  const [inputs, setInputs] = useState<Input>({
    name: "",
    recruitTitle: "",
    whatWeWillDo: "",
    mainRole: "",
  });
  const [buttonText, setText] = useState("更新する");

  const { data: circleData, loading, error } = useCircleQuery({
    variables: {
      id: circleId,
    },
  });

  // 現在のサークルの情報を格納
  useEffect(() => {
    if (!loading && !error) {
      const circle = circleData?.circle;
      if (circle) {
        setInputs({
          name: circle.name || "",
          recruitTitle: circle.recruitTitle || "",
          whatWeWillDo: circle.whatWeWillDo || "",
          mainRole: circle.mainRole || "",
        });
        const skills =
          circle.circleSkills.map((circleSkill) => circleSkill.skill.id) || [];
        const category = circle.subCategory?.id;
        setSkills(skills);
        setInitSkills(skills);
        console.log(category);
        if (!category) {
          console.log(
            "必須項目カテゴリーが選択されていません。選択してください"
          );
        } else {
          setCategory(category);
        }
      }
    }
  }, [circleData]);

  const redirectToDetail = () => {
    setTimeout(() => {
      history.push({
        pathname: "/circle-detail",
        state: { circleId },
      });
    }, 2000);
  };

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
      updateCircleData?.update_circles ||
      insertCircleSkillData?.insert_circle_skills ||
      deleteCircleSkillData?.delete_circle_skills
    ) {
      setText("更新しました");
    }
  }, [updateCircleData, insertCircleSkillData]);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const deletedSkills = extractRemoved(initSkills, selectedSkills);
    const addedSkills = extractAdded(initSkills, selectedSkills);
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
          subCategoryId: selectedCategory,
        },
      },
    });

    redirectToDetail();
  };

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
        <RoundedButton onClick={handleUpdate} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </TwoColumn>
  );
};

export default CircleEditPage;
