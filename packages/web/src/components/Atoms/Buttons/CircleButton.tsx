import React, { FC } from "react";

import { StyledButton, Props } from "./Default";
import styled from "styled-components";

const BUTTON_SIZE = {
  LARGE: "60px",
  MEDIUM: "50px",
  BASE: "40px",
  SMALL: "30px",
};

type ButtonSize = keyof typeof BUTTON_SIZE;

type CircleButtonProps = Props & {
  buttonSize?: ButtonSize;
};

const StyledCircleButton = styled(StyledButton)<CircleButtonProps>`
  border-radius: 50%;
  height: ${({ buttonSize = "BASE" }) => BUTTON_SIZE[buttonSize]};
  width: ${({ buttonSize = "BASE" }) => BUTTON_SIZE[buttonSize]};
`;

const CircleButton: FC<CircleButtonProps> = (props) => {
  return (
    <StyledCircleButton
      bgColor={props.bgColor}
      buttonSize={props.buttonSize}
      onClick={props.onClick}
      shadowDepth={props.shadowDepth}
    >
      {props.children}
    </StyledCircleButton>
  );
};

export default CircleButton;
