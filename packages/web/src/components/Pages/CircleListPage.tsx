import React, { FC, useState, useReducer, useEffect } from "react";
import { useCirclesQuery } from "../../generated/graphql";
import CircleCard from "../Molecules/Cards/CricleCard";
import styled from "styled-components";

import Pagenation from "../Molecules/Pagenition";

const StyledTitle = styled.h1`
  color: #292929;
  font-size: 2em;
  font-weight: normal;
  margin: 20px 0px;
  text-align: center;
`;

export type Pagination = {
  limit: number;
  currentPage: number;
};

const CircleListPage: FC = () => {
  const pageLimit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const getCirclesQueryVal = () => ({
    limit: pageLimit,
    offset: (currentPage - 1) * pageLimit,
  });

  const { data, loading, error } = useCirclesQuery({
    variables: getCirclesQueryVal(),
  });

  const getMaxPage = () => {
    if (data?.Circle_aggregate.aggregate?.count) {
      return Math.ceil(data?.Circle_aggregate.aggregate?.count / pageLimit);
    }
    return 1;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const circles = data?.Circle.map((circle) => {
    return <CircleCard key={circle.id} circle={circle} />;
  });

  return (
    <div>
      <StyledTitle>サークル一覧</StyledTitle>
      {circles}
      <Pagenation
        maxPage={getMaxPage()}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CircleListPage;
