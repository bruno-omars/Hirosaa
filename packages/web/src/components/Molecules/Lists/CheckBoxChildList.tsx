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
  subCategory: Pick<SubCategory, "id" | "name">;
};

const CheckBoxChildList: FC<Props> = (props) => {
  return (
    <ChildUl>
      <StyledLi>
        <CheckBoxWithText text={props.subCategory.name} />
      </StyledLi>
    </ChildUl>
  );
};

export default CheckBoxChildList;
