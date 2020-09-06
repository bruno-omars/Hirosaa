import React, { FC, useState, useMemo } from "react";
import { useCirclesQuery } from "../../generated/graphql";
import CircleCard from "../Molecules/Cards/CricleCard";
import styled from "styled-components";

import Pagenation from "../Molecules/Pagenition";
import SelectCategoryCard from "../Organisms/Cards/SelectCategoryCard";

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

const pageLimit = 10;

const CircleListPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSubcategories, setSubCategories] = useState<number[]>([]);

  const getCirclesQueryVal = () => {
    const where = selectedSubcategories.length
      ? {
          SubCategory: {
            id: {
              _in: selectedSubcategories,
            },
          },
        }
      : {};
    return {
      limit: 10,
      offset: (currentPage - 1) * pageLimit,
      where: where,
    };
  };

  const { data, error } = useCirclesQuery({
    variables: getCirclesQueryVal(),
  });

  const getMaxPage = useMemo(() => {
    if (data?.Circle_aggregate.aggregate?.count) {
      return Math.ceil(data?.Circle_aggregate.aggregate?.count / pageLimit);
    }
    return 1;
  }, [data, pageLimit]);

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
            maxPage={getMaxPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <SelectCategoryCard
          selectedSubcategories={selectedSubcategories}
          setSubCategories={setSubCategories}
        />
      </Grid>
    </>
  );
};

export default CircleListPage;
