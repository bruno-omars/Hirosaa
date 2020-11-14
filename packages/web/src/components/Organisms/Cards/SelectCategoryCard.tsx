import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxStagesList from "../../Molecules/Lists/CheckBoxStagesList";
import { useCategoriesQuery } from "../../../generated/graphql";
import Spinner from "../../Atoms/Indicator/Spinner";

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

type Props = {
  selectedSubcategories: number[];
  setSubCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const SelectCategoryCard: FC<Props> = ({
  selectedSubcategories,
  setSubCategories,
}) => {
  const { data, loading, error } = useCategoriesQuery();

  if (loading) return <Spinner />;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <StyledCard>
      <StyledH3>カテゴリー選択</StyledH3>
      {data?.parent_categories.map((parentCategory) => {
        return (
          <CheckBoxStagesList
            parentItem={parentCategory}
            childrenItems={parentCategory.sub_categories}
            key={parentCategory.id}
            selectedChildrenIds={selectedSubcategories}
            setChildrenIds={setSubCategories}
          />
        );
      })}
    </StyledCard>
  );
};

export default SelectCategoryCard;
