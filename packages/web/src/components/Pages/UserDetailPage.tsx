import React, { FC, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useUserQuery } from "../../generated/graphql";
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
  introduction: string;
  interested_in: string;
};
const UserDetailPage: FC = () => {
  const { state } = useLocation<Params>();
  const { me } = useAuthContext();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [textareas, setTextareas] = useState<Textarea>({
    introduction: "",
    interested_in: "",
  });
  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  console.log("data.", data?.user);
  if (!data?.user || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    setIsEditing(false);
  };

  const onSubmitMessage = () => {};

  return (
    <StyledPage>
      <UserDetailCard
        data={data}
        isEditing={isEditing}
        textareas={textareas}
        setTextareas={setTextareas}
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
