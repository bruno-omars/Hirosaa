import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { useUserQuery } from "../../generated/graphql";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";

type Params = {
  userId: string;
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

const StyledRoundedButton = styled(RoundedButton)`
  margin-bottom: 24px;
`;

const UserDetailPage: FC = () => {
  const { state } = useLocation<Params>();
  const { me } = useAuthContext();
  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
  });

  console.log("data.", data?.user);
  if (!data?.user || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const onEditMe = () => {};

  const onSubmitMessage = () => {};

  return (
    <StyledPage>
      <UserDetailCard data={data} />
      <StyledRightButtons>
        {me.id === userId ? (
          <StyledRoundedButton clickHandler={onEditMe} buttonSize="SMALL">
            編集する
          </StyledRoundedButton>
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
