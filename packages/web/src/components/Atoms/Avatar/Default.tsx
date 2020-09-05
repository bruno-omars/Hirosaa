import React from "react";
import styled from "styled-components";
import { COLOR } from "../../../constants/color";

export type Props = {
  size: number;
};

const Avatar = styled.img<Props>`
  border-radius: ${({ size }) => size / 2}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  background-color: ${COLOR.LIGHT_GREEN};
`;

export default Avatar;
