import React, { FC } from "react";
import styled from "styled-components";

import { StyledButton, Props } from "./Default";

export const RADIUS_SIZE = {
  BASE: "50px",
};

export type RadiusSize = keyof typeof RADIUS_SIZE;

type RoundedButtonProps = Props & {
  borderRadius?: RadiusSize;
};

const RoundedButton = styled(StyledButton)<RoundedButtonProps>`
  border-radius: ${({ borderRadius = "BASE" }) => RADIUS_SIZE[borderRadius]};
`;

export default RoundedButton;
