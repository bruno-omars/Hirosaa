import React, { FC } from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

const SIZE = {
  LARGE: "400px",
  MEDIUM: "380px",
  BASE: "260px",
  SMALL: "150PX",
};

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputSize?: keyof typeof SIZE;
};

const StyledInput = styled.input<Omit<Props, "handleChange">>`
  box-sizing: border-box;
  border: 1px solid #707070;
  border-radius: 4px;
  color: #00000f;
  font: 15px/24px sans-serif;
  height: 40px;
  letter-spacing: 1px;
  padding: 0.3em;
  transition: 0.3s;
  width: ${({ inputSize = "BASE" }) => SIZE[inputSize]};

  :focus {
    border: 1px solid ${COLOR["LIGHT_GREEN"]};
    outline: none;
  }
`;

const DefaultInput: FC<Props> = (props) => {
  return (
    <StyledInput
      onChange={props.handleChange}
      placeholder={props.placeholder}
      inputSize={props.inputSize}
    />
  );
};

export default DefaultInput;
