import React, { FC } from "react";
import DefaultCheckBox from "../../Atoms/CheckBoxes/DefaultCheckBox";
import styled from "styled-components";

type Props = {
  text: string;
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  width: 100px;
  line-height: 18px;
`;

const CheckBoxWithText: FC<Props> = (props) => {
  return (
    <StyledDiv>
      <DefaultCheckBox />
      {props.text}
    </StyledDiv>
  );
};

export default CheckBoxWithText;
