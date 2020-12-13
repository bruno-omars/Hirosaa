import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  useDeleteUserSkillMutation,
  useInsertUserSkillMutation,
  useUpdateUserMutation,
  useUserQuery,
} from "../../generated/graphql";
import { extractAdded, extractRemoved } from "../../utils/filtering";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import Spinner from "../Atoms/Indicator/Spinner";
import UserEditCard from "../Organisms/Cards/UserEditCard";
import TwoColumn from "../Templates/TwoColumn";

const RightButton = styled.div`
  align-self: start;
`;

type Params = {
  userId: string;
};

export type UserEditInput = {
  name: string;
  interestedIn: string;
  introduction: string;
};

const UserEditPage: React.FC = () => {
  const { state } = useLocation<Params>();
  const history = useHistory();
  const [buttonText, setText] = useState("更新する");
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [initSkills, setInitSkills] = useState<number[]>([]);
  const userId = state.userId;
  const [inputs, setInputs] = useState<UserEditInput>({
    name: "",
    interestedIn: "",
    introduction: "",
  });
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  const redirectToDetail = () => {
    setTimeout(() => {
      history.push({
        pathname: `/user-detail/${userId}`,
      });
    }, 2000);
  };

  // 現在のユーザの情報を格納
  useEffect(() => {
    if (!loading && !error) {
      const user = data?.user;
      if (user) {
        setInputs({
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

  const [updateUser, { data: updateUserData }] = useUpdateUserMutation();
  const [
    insertUserSkill,
    { data: insertUserSkillData },
  ] = useInsertUserSkillMutation();
  const [
    deleteUserSkill,
    { data: deleteUserSkillData },
  ] = useDeleteUserSkillMutation();

  useEffect(() => {
    // TODO(Ropital): 正確に条件分岐する
    if (
      updateUserData?.update_users ||
      insertUserSkillData?.insert_user_skills ||
      deleteUserSkillData?.delete_user_skills
    ) {
      setText("更新しました");
    }
  }, [updateUserData]);

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
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
    updateUser({
      variables: {
        where: {
          id: {
            _eq: userId,
          },
        },
        _set: {
          ...inputs,
        },
      },
    });

    redirectToDetail();
  };

  console.log("data.", data?.user);
  if (!data?.user || loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  return (
    <TwoColumn defaultStyle>
      <UserEditCard
        inputs={inputs}
        setInputs={setInputs}
        selectedSkills={selectedSkills}
        setSkills={setSkills}
      />
      <RightButton>
        <RoundedButton onClick={handleUpdate} buttonSize="SMALL">
          {buttonText}
        </RoundedButton>
      </RightButton>
    </TwoColumn>
  );
};

export default UserEditPage;
