import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, UseFormMethods } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import {
  useDeleteUserSkillMutation,
  useInsertUserSkillMutation,
  useUpdateUserMutation,
  useUserQuery,
} from "../generated/graphql";
import { extractAdded, extractRemoved } from "../utils/filtering";

type Params = {
  userId: string;
};

export type UserEditInput = {
  name: string;
  interestedIn: string;
  introduction: string;
};

export type UserEditFormReturn = UseFormMethods<UserEditInput> & {
  selectedSkills: number[];
  setSkills: Dispatch<SetStateAction<number[]>>;
  onSubmit: (data: UserEditInput) => void;
  isLoading: boolean;
};

export const useEditUserForm = (): UserEditFormReturn => {
  const history = useHistory();
  const { state } = useLocation<Params>();
  const { reset, ...rest } = useForm<UserEditInput>();
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [initSkills, setInitSkills] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  // 現在のユーザの情報を格納
  useEffect(() => {
    if (!loading && !error) {
      const user = data?.user;
      if (user) {
        reset({
          name: user.name || "",
          introduction: user.introduction || "",
          interestedIn: user.interestedIn || "",
        });
        const skills =
          user.userSkills.map((user_skill) => user_skill.skill.id) || [];
        setSkills(skills);
        setInitSkills(skills);
      }
    }
  }, [data]);

  const [updateUser] = useUpdateUserMutation();
  const [insertUserSkill] = useInsertUserSkillMutation();
  const [deleteUserSkill] = useDeleteUserSkillMutation();

  const onSubmit = async (data: UserEditInput) => {
    const deletedSkills = extractRemoved(initSkills, selectedSkills);
    const addedSkills = extractAdded(initSkills, selectedSkills);
    addedSkills.forEach((id) => {
      insertUserSkill({
        variables: {
          userId,
          skillId: id,
        },
      });
    });
    deletedSkills.forEach((id) => {
      deleteUserSkill({
        variables: {
          userId,
          skillId: id,
        },
      });
    });
    setIsLoading(true);
    try {
      await updateUser({
        variables: {
          where: {
            id: {
              _eq: userId,
            },
          },
          _set: {
            ...data,
          },
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
      history.push({
        pathname: `/user-detail/${userId}`,
      });
    }
  };

  return {
    ...rest,
    reset,
    selectedSkills,
    setSkills,
    onSubmit,
    isLoading,
  };
};
