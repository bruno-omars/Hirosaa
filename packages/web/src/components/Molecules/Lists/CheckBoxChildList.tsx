import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";
import { SubCategory } from "../../../generated/graphql";

const ChildUl = styled.ul`
  margin-left: 20px;
  margin-top: 10px;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-top: 10px;
`;

type Props = {
  subCategories: ({
    __typename?: "SubCategory" | undefined;
  } & Pick<SubCategory, "id" | "name">)[];
  selectedSubcategories: number[];
  setSubCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxChildList: FC<Props> = ({
  subCategories,
  selectedSubcategories,
  setSubCategories,
}) => {
  const handleSubCategorySet = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    id: number
  ) => {
    let newSelectedSubcategories: number[];
    if (selectedSubcategories.includes(id)) {
      newSelectedSubcategories = selectedSubcategories.filter(
        (num) => num !== id
      );
    } else {
      newSelectedSubcategories = [...selectedSubcategories, id];
    }
    setSubCategories(newSelectedSubcategories);
    console.log(selectedSubcategories);
  };

  return (
    <ChildUl>
      {subCategories.map((subCategory) => (
        <StyledLi key={subCategory.id}>
          <CheckBoxWithText
            text={subCategory.name}
            handleClick={(e) => handleSubCategorySet(e, subCategory.id)}
          />
        </StyledLi>
      ))}
    </ChildUl>
  );
};

export default CheckBoxChildList;
