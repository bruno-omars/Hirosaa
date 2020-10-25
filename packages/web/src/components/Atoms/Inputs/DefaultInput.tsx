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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  inputSize?: keyof typeof SIZE;
  name?: string;
  value?: string;
};

const StyledInput = styled.input<Omit<Props, "onChange">>`
  box-sizing: border-box;
  border: 1px solid ${COLOR["BORDER_TEXT_INPUT"]};
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
  return <StyledInput {...props} />;
};

export default DefaultInput;
