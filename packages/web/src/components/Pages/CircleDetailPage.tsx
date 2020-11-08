import React, { FC } from "react";
import { useCircleQuery } from "../../generated/graphql";
import CircleDetailCard from "../Organisms/Cards/CircleDetailCard";
import styled from "styled-components";
import RoundedButton from "../Atoms/Buttons/RoundedButton";
import { useLocation } from "react-router-dom";

type Params = {
  circleId: number;
};

const StyledRightButtons = styled.div`
  align-self: start;
`;

const StyledRoundedButton = styled(RoundedButton)`
  margin-bottom: 24px;
`;

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
  padding-top: 60px;
`;

const CircleDetailPage: FC = (props) => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;

  const { data, loading, error } = useCircleQuery({
    variables: { id: circleId },
  });

  if (!data?.circle || loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const handleClickJoin = () => {};
  const handleClickEdit = () => {};

  return (
    <StyledPage>
      <CircleDetailCard circle={data.circle} />
      <StyledRightButtons>
        <StyledRoundedButton clickHandler={handleClickJoin} buttonSize="SMALL">
          応募する
        </StyledRoundedButton>
        <StyledRoundedButton clickHandler={handleClickEdit} buttonSize="SMALL">
          編集する
        </StyledRoundedButton>
      </StyledRightButtons>
    </StyledPage>
  );
};

export default CircleDetailPage;
