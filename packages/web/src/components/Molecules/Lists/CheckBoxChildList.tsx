import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";
import {
  SubCategory,
  SubCategory_Update_Column,
} from "../../../generated/graphql";

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
};

const CheckBoxChildList: FC<Props> = (props) => {
  return (
    <ChildUl>
      {props.subCategories.map((subCategory) => (
        <StyledLi key={subCategory.id}>
          <CheckBoxWithText text={subCategory.name} />
        </StyledLi>
      ))}
    </ChildUl>
  );
};

export default CheckBoxChildList;
