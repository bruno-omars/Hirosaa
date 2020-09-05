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
};

const CheckBoxParentList: FC<Props> = (props) => {
  return (
    <ParentUl>
      <StyledLi>
        <CheckBoxWithText text={props.parentCategory.name} />
      </StyledLi>
      <CheckBoxChildList subCategories={props.parentCategory.SubCategories} />
    </ParentUl>
  );
};

export default CheckBoxParentList;
