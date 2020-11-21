import React, { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useUserQuery } from "../../generated/graphql";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";

type Params = {
  userId: string;
};

const StyledRightButtons = styled.div`
  align-self: start;
`;

const StyledRoundedButton = styled(RoundedButton)`
  margin-bottom: 24px;
`;

const UserDetailPage: FC = () => {
  const history = useHistory();
  const { state } = useLocation<Params>();
  const { me } = useAuthContext();
  const userId = state.userId;
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
    pollInterval: 500,
  });

  console.log("data.", data?.user);
  if (!data?.user || loading) return <Spinner />;
  if (error) return <p>{error.message}</p>;

  const onEditMe = () => {
    history.push({
      pathname: "/user-edit",
      state: { userId },
    });
  };

  const onSubmitMessage = () => {};

  return (
    <TwoColumn defaultStyle>
      <UserDetailCard data={data} />
      <StyledRightButtons>
        {me.id === userId ? (
          <StyledRoundedButton onClick={onEditMe} buttonSize="SMALL">
            編集する
          </StyledRoundedButton>
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
