import React, { FC } from "react";
import { useCirclesQuery } from "../../generated/graphql";
import CircleCard from "../Molecules/Cards/CricleCard";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #292929;
  font-size: 2em;
  font-weight: normal;
  margin: 20px 0px;
  text-align: center;
`;

const CircleListPage: FC = () => {
  const { data, loading, error } = useCirclesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  console.log(data);
  const circles = data?.Circle.map((circle) => {
    return <CircleCard key={circle.id} circle={circle} />;
  });

  return (
    <div>
      <StyledTitle>サークル一覧</StyledTitle>
      {circles}
    </div>
  );
};

export default CircleListPage;
