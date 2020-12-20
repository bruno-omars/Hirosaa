import React, { FC } from "react";
import { useCircleQuery } from "../../generated/graphql";
import CircleDetailCard from "../Organisms/Cards/CircleDetailCard";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";
import { useAuthContext } from "../../provider/AuthContextProvider";
import { Button } from "@chakra-ui/react";

type Params = {
  circleId: number;
};

const StyledRightButtons = styled.div`
  width: 100%;
`;

const CircleDetailPage: FC = (props) => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;
  const history = useHistory();
  const { me } = useAuthContext();

  const handleClickEdit = () => {
    history.push({
      pathname: "/circle-edit",
      state: { circleId },
    });
  };

  const { data, loading, error } = useCircleQuery({
    variables: { id: circleId },
    pollInterval: 500,
  });

  if (!data?.circle || loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  const handleClickJoin = () => {};

  const hostIsMe = data.circle.owner?.id === me.id;

  return (
    <TwoColumn defaultStyle>
      <CircleDetailCard circle={data.circle} />
      <StyledRightButtons>
        {hostIsMe ? (
          <Button
            shadow="md"
            w="120px"
            colorScheme="teal"
            onClick={handleClickEdit}
          >
            編集する
          </Button>
        ) : (
          <Button
            shadow="md"
            w="120px"
            colorScheme="teal"
            onClick={handleClickJoin}
          >
            応募する
          </Button>
        )}
      </StyledRightButtons>
    </TwoColumn>
  );
};

export default CircleDetailPage;
