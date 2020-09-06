import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";
import CheckBoxChildList from "./CheckBoxChildList";
import { ParentCategory, SubCategory } from "../../../generated/graphql";

const ParentUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  margin-top: 10px;
`;

type Props = {
  parentCategory: {
    __typename?: "ParentCategory" | undefined;
  } & Pick<ParentCategory, "name" | "id"> & {
      SubCategories: ({
        __typename?: "SubCategory" | undefined;
      } & Pick<SubCategory, "id" | "name">)[];
    };
  selectedSubcategories: number[];
  setSubCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxParentList: FC<Props> = ({
  parentCategory,
  selectedSubcategories,
  setSubCategories,
}) => {
  const handleParentCategorySet = (
    e: React.ChangeEvent<HTMLInputElement>,
    childrenIds: number[]
  ) => {
    let newSelectedSubcategories: number[];
    childrenIds.forEach((id) => {
      if (selectedSubcategories.includes(id)) {
        newSelectedSubcategories = selectedSubcategories.filter(
          (num) => !childrenIds.includes(num)
        );
        setSubCategories(newSelectedSubcategories);
        return;
      } else {
        newSelectedSubcategories = [...selectedSubcategories, ...childrenIds];
        setSubCategories(newSelectedSubcategories);
        return;
      }
    });
    console.log(selectedSubcategories);
  };

  return (
    <ParentUl>
      <StyledLi>
        <CheckBoxWithText
          text={parentCategory.name}
          onChange={(e) =>
            handleParentCategorySet(
              e,
              parentCategory.SubCategories.map((subCategory) => subCategory.id)
            )
          }
        />
      </StyledLi>
      <CheckBoxChildList
        subCategories={parentCategory.SubCategories}
        selectedSubcategories={selectedSubcategories}
        setSubCategories={setSubCategories}
      />
    </ParentUl>
  );
};

export default CheckBoxParentList;
