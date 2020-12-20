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
import {
  CircleCreateForm,
  useCreateCircleFrom,
} from "../../hooks/useCreateCircleForm";
import { Button } from "@chakra-ui/react";

const RightButton = styled.div`
  align-self: start;
`;

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
  const formState = useCreateCircleFrom();
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
        formState.reset({
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

  const onSubmit = (data: CircleCreateForm) => {
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
          ...data,
          subCategoryId: selectedCategory,
        },
      },
    });

    redirectToDetail();
  };

  return (
    <form>
      <TwoColumn defaultStyle>
        <CircleCreateCard {...formState} />
        <RightButton>
          <Button
            isLoading={formState.isLoading}
            shadow="md"
            w="120px"
            colorScheme="teal"
            type="submit"
            buttonSize="SMALL"
          >
            {buttonText}
          </Button>
        </RightButton>
      </TwoColumn>
    </form>
  );
};

export default CircleEditPage;
