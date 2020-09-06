import React, { FC } from "react";
import DefaultCheckBox from "../../Atoms/CheckBoxes/DefaultCheckBox";
import styled from "styled-components";

import { Props as DefaultProps } from "../../Atoms/CheckBoxes/DefaultCheckBox";

type Props = DefaultProps & {
  text: string;
};

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  width: 140px;
  font-size: 12px;
  line-height: 18px;
`;

const CheckBoxWithText: FC<Props> = (props) => {
  return (
    <StyledDiv>
      <DefaultCheckBox handleClick={props.handleClick} />
      {props.text}
    </StyledDiv>
  );
};

export default CheckBoxWithText;
