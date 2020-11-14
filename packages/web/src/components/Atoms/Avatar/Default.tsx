import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

export type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: number;
};

const Avatar = styled.img<Props>`
  border-radius: ${({ size }) => size / 2}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${COLOR.LIGHT_GREEN};
  cursor: pointer;
`;

export default Avatar;
