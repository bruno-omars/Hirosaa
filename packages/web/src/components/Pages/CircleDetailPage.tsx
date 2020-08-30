import React, { FC } from "react";
import { useCircleQuery } from "../../generated/graphql";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

type Params = {
  circleId: number;
};

const CircleDetailPage: FC = (props) => {
  const { state } = useLocation<Params>();
  const circleId = state.circleId;

  const { data, loading, error } = useCircleQuery({
    variables: { id: circleId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return <div></div>;
};

export default CircleDetailPage;
