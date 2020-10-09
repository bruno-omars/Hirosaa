import React, { FC, useCallback, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useUserQuery } from "../../generated/graphql";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";

const StyledRightButtons = styled.div`
  align-self: start;
`;

const StyledRoundedButton = styled(RoundedButton)`
  margin-bottom: 24px;
`;

const UserDetailPage: FC = () => {
  const { id: userId } = useParams<{ id: string }>();
  const history = useHistory();
  const { me } = useAuthContext();
  const { data, loading, error } = useUserQuery({
    variables: {
      id: userId,
    },
    pollInterval: 500,
  });

  const isMe = useMemo(() => me.id === userId, [me, userId]);

  const toEditPage = useCallback(() => {
    history.push({
      pathname: "/user-edit",
      state: { userId },
    });
  }, [history]);

  const onSubmitMessage = () => {};

  if (data?.user == null || loading) return <Spinner />;

  if (error) return <p>{error.message}</p>;

  return (
    <TwoColumn defaultStyle>
      <UserDetailCard user={data.user} />
      <StyledRightButtons>
        {isMe ? (
          <StyledRoundedButton onClick={toEditPage} buttonSize="SMALL">
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
