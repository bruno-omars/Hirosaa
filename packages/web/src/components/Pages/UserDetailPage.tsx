import React, { FC, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  useUserQuery,
  Skill_Constraint,
  Skill_Update_Column,
} from "../../generated/graphql";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";

type Params = {
  userId: string;
};

type handleClick = {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonSize: string;
};

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const StyledRightButtons = styled.div`
  align-self: start;
`;

const StyledRoundedButton = styled(RoundedButton)<handleClick>`
  margin-bottom: 24px;
`;
export type Textarea = {
  avatar: string;
  name: string;
  introduction: string;
  interested_in: string;
};
const UserDetailPage: FC = () => {
  const { state } = useLocation<Params>();
  const { me } = useAuthContext();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [textareas, setTextareas] = useState<Textarea>({
    avatar: "",
    name: "",
    introduction: "",
    interested_in: "",
  });
  console.log(textareas);
  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });
  const Skills = selectedSkills.map((skill: number) => ({
    Skill: {
      data: { id: skill, avatar: "", name: "" },
      on_conflict: {
        constraint: Skill_Constraint.SkillPkey,
        update_columns: [Skill_Update_Column.Id],
      },
    },
  }));
  console.log(Skills);
  if (!data?.user || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    //処理を走らせたい。。。
    setIsEditing(false);
  };

  const onSubmitMessage = () => {};

  return (
    <StyledPage>
      <UserDetailCard
        userData={data}
        isEditing={isEditing}
        textareas={textareas}
        setTextareas={setTextareas}
        setSkills={setSkills}
        selectedSkills={selectedSkills}
      />
      <StyledRightButtons>
        {me.id === userId ? (
          !isEditing ? (
            <StyledRoundedButton clickHandler={handleEdit} buttonSize="SMALL">
              編集する
            </StyledRoundedButton>
          ) : (
            <StyledRoundedButton clickHandler={saveEdit} buttonSize="SMALL">
              保存する
            </StyledRoundedButton>
          )
        ) : (
          <StyledRoundedButton clickHandler={onSubmitMessage} buttonSize="BASE">
            メッセージを送信する
          </StyledRoundedButton>
        )}
      </StyledRightButtons>
    </StyledPage>
  );
};

export default UserDetailPage;
