import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import {
  useCircleQuery,
  useDeleteCircleSkillMutation,
  useInsertCircleSkillMutation,
  useUpdateCirlceMutation,
} from "../generated/graphql";
import { extractAdded, extractRemoved } from "../utils/filtering";
import { CircleForm, CircleFormReturn } from "./useCreateCircleForm";

type Params = {
  circleId: number;
};

export const useEditCircleFrom = (): CircleFormReturn => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [initSkills, setInitSkills] = useState<number[]>([]);
  const [selectedCategory, setCategory] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { reset, ...rest } = useForm<CircleForm>({ mode: "onChange" });

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
        reset({
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

  const [updateCircle] = useUpdateCirlceMutation();
  const [insertCircleSkill] = useInsertCircleSkillMutation();
  const [deleteCircleSkill] = useDeleteCircleSkillMutation();

  const onSubmit = async (data: CircleForm) => {
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
    setIsLoading(true);
    try {
      await updateCircle({
        variables: {
          id: circleId,
          inputs: {
            ...data,
            subCategoryId: selectedCategory,
          },
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }

    history.push({
      pathname: "/circle-detail",
      state: { circleId },
    });
  };

  return {
    ...rest,
    reset,
    onSubmit,
    selectedSkills,
    setSkills,
    selectedCategory,
    setCategory,
    isLoading,
  };
};
