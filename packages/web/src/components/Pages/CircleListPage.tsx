import React, { FC, useState, useReducer, useEffect } from "react";
import { useCirclesQuery } from "../../generated/graphql";
import CircleCard from "../Molecules/Cards/CricleCard";
import styled from "styled-components";

import Pagenation from "../Molecules/Pagenition";
import SelectCategoryCard from "../Molecules/Cards/SelectCategoryCard";

const StyledTitle = styled.h1`
  color: #292929;
  font-size: 2em;
  font-weight: normal;
  margin: 20px 0px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
`;

export type Pagination = {
  limit: number;
  currentPage: number;
};

const CircleListPage: FC = () => {
  const [pagination, setPagination] = useState<Pagination>({
    limit: 10,
    currentPage: 1,
  });

  const getCirclesQueryVal = () => ({
    limit: 10,
    offset: (pagination.currentPage - 1) * pagination.limit,
  });

  const { data, loading, error } = useCirclesQuery({
    variables: getCirclesQueryVal(),
  });

  const getMaxPage = () => {
    if (data?.Circle_aggregate.aggregate?.count) {
      return Math.ceil(
        data?.Circle_aggregate.aggregate?.count / pagination.limit
      );
    }
    return 1;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  const circles = data?.Circle.map((circle) => {
    return <CircleCard key={circle.id} circle={circle} />;
  });

  return (
    <>
      <StyledTitle>サークル一覧</StyledTitle>
      <Grid>
        <div>
          {circles}
          <Pagenation
            maxPage={getMaxPage()}
            setPagination={setPagination}
            pagination={pagination}
          />
        </div>
        <SelectCategoryCard />
      </Grid>
    </>
  );
};

export default CircleListPage;
