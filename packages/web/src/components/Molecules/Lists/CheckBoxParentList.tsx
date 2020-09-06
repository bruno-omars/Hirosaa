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
  return (
    <ParentUl>
      <StyledLi>
        <CheckBoxWithText text={parentCategory.name} handleClick={() => {}} />
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
