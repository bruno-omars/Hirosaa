import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxParentList from "../../Molecules/Lists/CheckBoxParentList";
import { useCategoriesQuery } from "../../../generated/graphql";

const StyledCard = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  border-radius: 3px;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 330px;
  padding: 30px;
  width: 80%;
`;

const StyledH3 = styled.h3`
  text-align: center;
  font-weight: 100;
`;

const SelectCategoryCard: FC = () => {
  const { data, loading, error } = useCategoriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <StyledCard>
      <StyledH3>カテゴリー選択</StyledH3>
      {data?.ParentCategory.map((parentCategory) => {
        return (
          <CheckBoxParentList
            parentCategory={parentCategory}
            key={parentCategory.id}
          />
        );
      })}
    </StyledCard>
  );
};

export default SelectCategoryCard;
