import React, { FC, useState, useMemo } from "react";
import { useCirclesQuery } from "../../generated/graphql";
import CircleCard from "../Molecules/Cards/CircleCard";
import styled from "styled-components";

import Pagenation from "../Molecules/Pagenition";
import SelectCategoryCard from "../Organisms/Cards/SelectCategoryCard";
import Spinner from "../Atoms/Indicator/Spinner";
import media from "styled-media-query";

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
  justify-items: center;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    grid-template-rows: 330px 1fr;
  `}
`;

const CircleContainer = styled.div`
  width: 100%;

  ${media.lessThan("medium")`
    grid-row-start: 2;
  `}
`;

const TopPaginationWraaper = styled.div`
  margin-bottom: 50px;
`;

export type Pagination = {
  limit: number;
  currentPage: number;
};

const pageLimit = 10;

const CircleListPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubcategories, setSubCategories] = useState<number[]>([]);

  const where = useMemo(() => {
    return selectedSubcategories.length
      ? {
          subCategory: {
            id: {
              _in: selectedSubcategories,
            },
          },
        }
      : {};
  }, [selectedSubcategories]);

  const variables = useMemo(() => {
    return {
      limit: 10,
      offset: (currentPage - 1) * pageLimit,
      where: where,
    };
  }, [where, currentPage]);

  const { data, loading, error } = useCirclesQuery({
    variables: variables,
  });

  const maxPage = useMemo(() => {
    if (data?.circles_aggregate.aggregate?.count) {
      return Math.ceil(data.circles_aggregate.aggregate?.count / pageLimit);
    }
    return 1;
  }, [data]);

  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  const circles = data?.circles.map((circle) => {
    return <CircleCard key={circle.id} circle={circle} />;
  });

  return (
    <>
      <StyledTitle>サークル一覧</StyledTitle>
      <Grid>
        <CircleContainer>
          {circles !== undefined && circles.length >= 5 && maxPage > 1 ? (
            <TopPaginationWraaper>
              <Pagenation
                maxPage={maxPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </TopPaginationWraaper>
          ) : null}
          {circles}
          <Pagenation
            maxPage={maxPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </CircleContainer>
        <SelectCategoryCard
          selectedSubcategories={selectedSubcategories}
          setSubCategories={setSubCategories}
        />
      </Grid>
    </>
  );
};

export default CircleListPage;
