import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";

type Props = {};

const StyledCard = styled.div<Props>`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
  border-radius: 3px;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 1fr;
  height: 300px;
  padding: 30px;
  width: 80%;
`;

const ParentUl = styled.ul`
  list-style: none;
`;

const ChildUl = styled.ul`
  margin-left: 20px;
  margin-top: 10px;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-top: 10px;
`;

const StyledH3 = styled.h3`
  text-align: center;
`;

const SelectCategoryCard: FC<Props> = () => {
  return (
    <StyledCard>
      <StyledH3>カテゴリー選択</StyledH3>
      <ParentUl>
        <StyledLi>
          <CheckBoxWithText text="hello" />
        </StyledLi>
        <ChildUl>
          <StyledLi>
            <CheckBoxWithText text="hello" />
          </StyledLi>
          <StyledLi>
            <CheckBoxWithText text="hello" />
          </StyledLi>
        </ChildUl>
        <StyledLi>
          <CheckBoxWithText text="hello" />
        </StyledLi>
        <StyledLi>
          <CheckBoxWithText text="hello" />
        </StyledLi>
      </ParentUl>
    </StyledCard>
  );
};

export default SelectCategoryCard;
