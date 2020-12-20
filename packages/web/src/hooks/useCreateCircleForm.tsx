import { Dispatch, SetStateAction, useState } from "react";
import { useForm, UseFormMethods } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Skills_Constraint,
  Skills_Update_Column,
  useInsertCircleMutation,
} from "../generated/graphql";
import { useAuthContext } from "../provider/AuthContextProvider";

export type CircleForm = {
  name: string;
  recruitTitle: string;
  whatWeWillDo: string;
  mainRole: string;
};

export type CircleFormReturn = UseFormMethods<CircleForm> & {
  onSubmit: (data: CircleForm) => Promise<void>;
  selectedSkills: number[];
  setSkills: Dispatch<SetStateAction<number[]>>;
  selectedCategory: number;
  setCategory: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
};

export const useCreateCircleFrom = (): CircleFormReturn => {
  const { me } = useAuthContext();
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [selectedCategory, setCategory] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [insertCircle, { data }] = useInsertCircleMutation();
  const history = useHistory();

  const onSubmit = async (data: CircleForm) => {
    setIsLoading(true);
    try {
      await insertCircle({
        variables: {
          objects: [
            {
              ...data,
              subCategoryId: selectedCategory,
              circleSkills: {
                data: [...skills],
              },
              ownerId: me.id,
            },
          ],
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
      history.push("/circle");
    }
  };

  const skills = selectedSkills.map((skill: number) => ({
    skill: {
      data: { id: skill, avatar: "", name: "" },
      on_conflict: {
        constraint: Skills_Constraint.SkillPkey,
        update_columns: [Skills_Update_Column.Id],
      },
    },
  }));

  return {
    ...useForm<CircleForm>(),
    onSubmit,
    selectedSkills,
    setSkills,
    selectedCategory,
    setCategory,
    isLoading,
  };
};
