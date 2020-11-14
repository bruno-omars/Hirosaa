import React, { FC } from "react";
import { useCircleQuery } from "../../generated/graphql";
import CircleDetailCard from "../Organisms/Cards/CircleDetailCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import { useLocation, useHistory } from "react-router-dom";
import TwoColumn from "../Templates/TwoColumn";
import Spinner from "../Atoms/Indicator/Spinner";

type Params = {
  circleId: number;
};

const StyledRightButtons = styled.div`
  align-self: start;
`;

const StyledRoundedButton = styled(RoundedButton)`
  margin-bottom: 24px;
`;

const CircleDetailPage: FC = (props) => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;
  const history = useHistory();

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

  return (
    <TwoColumn defaultStyle>
      <CircleDetailCard circle={data.circle} />
      <StyledRightButtons>
        <StyledRoundedButton onClick={handleClickJoin} buttonSize="SMALL">
          応募する
        </StyledRoundedButton>
        <StyledRoundedButton onClick={handleClickEdit} buttonSize="SMALL">
          編集する
        </StyledRoundedButton>
      </StyledRightButtons>
    </TwoColumn>
  );
};

export default CircleDetailPage;
