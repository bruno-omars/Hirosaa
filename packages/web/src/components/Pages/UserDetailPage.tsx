import React, { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserQuery, useUpdateUserMutation } from "../../generated/graphql";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";

type Params = {
  userId: string;
};

type handleClick = {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonSize: string;
};
export type Textarea = {
  avatar: string;
  name: string;
  introduction: string;
  interested_in: string;
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

const UserDetailPage: FC = () => {
  const [updateUser] = useUpdateUserMutation();
  const { state } = useLocation<Params>();
  const { me } = useAuthContext();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(true);
  const [selectedSkills, setSkills] = useState<number[]>([]);
  const [textareas, setTextareas] = useState<Textarea>({
    avatar: "",
    name: "",
    introduction: "",
    interested_in: "",
  });

  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  if (!data?.user || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = async () => {
    await updateUser({
      variables: {
        _set: { ...textareas },
        where: { id: { _eq: userId } },
      },
    });
    setIsSaving(false);
    window.location.reload();
  };

  const onSubmitMessage = () => {};

  return (
    <TwoColumn defaultStyle>
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
            <StyledRoundedButton onClick={handleEdit} buttonSize="SMALL">
              編集する
            </StyledRoundedButton>
          ) : (
            <StyledRoundedButton onClick={saveEdit} buttonSize="SMALL">
              {isSaving ? "保存する" : "保存しました"}
            </StyledRoundedButton>
          )
        ) : (
          <StyledRoundedButton onClick={onSubmitMessage} buttonSize="BASE">
            メッセージを送信する
          </StyledRoundedButton>
        )}
      </StyledRightButtons>
    </TwoColumn>
  );
};

export default UserDetailPage;
