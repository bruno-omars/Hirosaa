import React, { FC, useCallback, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useUserQuery } from "../../generated/graphql";
import styled from "styled-components";
import UserDetailCard from "../Organisms/Cards/UserDetailCard";
import { useAuthContext } from "../../provider/AuthContextProvider";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";
import { Button } from "@chakra-ui/react";

const StyledRightButtons = styled.div`
  align-self: start;
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
          <Button shadow="md" w="120px" colorScheme="teal" onClick={toEditPage}>
            編集する
          </Button>
        ) : (
          <Button
            shadow="md"
            w="120px"
            colorScheme="teal"
            onClick={onSubmitMessage}
          >
            メッセージを送信する
          </Button>
        )}
      </StyledRightButtons>
    </TwoColumn>
  );
};

export default UserDetailPage;
