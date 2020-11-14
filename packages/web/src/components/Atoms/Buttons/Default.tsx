import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLOR } from "../../../constants/color";

export const BUTTON_SIZE = {
  LARGE: { H: "60px", W: "400px" },
  MEDIUM: { H: "60px", W: "380px" },
  BASE: { H: "40px", W: "220px" },
  SMALL: { H: "40px", W: "150px" },
  MINI: { H: "52px", W: "45px" },
};

// TODO: カードやボタンによって名前と深さを決めるようにする
export const SHADOW_DEPTH = {
  LERGE: css`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  `,
  MIDIUM: css`
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.26);
  `,
  BASE: css`
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.18);
  `,
  SMALL: css`
    box-shadow: 0 2px 0.3px rgba(0, 0, 0, 0.1);
  `,
  NONE: css`
    box-shadow: none;
  `,
};

export type ButtonSize = keyof typeof BUTTON_SIZE;
export type Color = keyof typeof COLOR;
export type ShadowDepth = keyof typeof SHADOW_DEPTH;

export type Props = {
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  buttonSize?: ButtonSize;
  bgColor?: Color;
  disabled?: boolean;
  shadowDepth?: ShadowDepth;
};

export const StyledButton = styled.button<Props>`
  background-color: ${({ bgColor = "LIGHT_GREEN" }) => COLOR[bgColor]};
  border: ${({ bgColor = "LIGHT_GREEN" }) =>
    bgColor === "WHITE" ? "1px solid rgba(0,0,0,0.4)" : "none"};
  color: ${({ bgColor = "LIGHT_GREEN" }) =>
    bgColor === "WHITE" ? COLOR["LIGHT_GREEN"] : COLOR["WHITE"]};
  cursor: pointer;
  font-size: 18px;
  height: ${({ buttonSize = "BASE" }) => BUTTON_SIZE[buttonSize].H};
  ${({ shadowDepth = "BASE" }) => SHADOW_DEPTH[shadowDepth]};
  width: ${({ buttonSize = "BASE" }) => BUTTON_SIZE[buttonSize].W};
`;

const Default: FC<Props> = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Default;
