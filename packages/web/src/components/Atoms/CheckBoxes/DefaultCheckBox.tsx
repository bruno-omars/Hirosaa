import React, { FC } from "react";
import styled from "styled-components";

export type Props = {
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  cursor: pointer;
  margin: 0;

  :before {
    position: absolute;
    z-index: 1;
    top: 0.125rem;
    left: 0.1875rem;
    width: 0.75rem;
    height: 0.375rem;
    content: "";
    -webkit-transition: -webkit-transform 0.4s
      cubic-bezier(0.45, 1.8, 0.5, 0.75);
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    -webkit-transform: rotate(-45deg) scale(0, 0);
    transform: rotate(-45deg) scale(0, 0);
    border: 2px solid #f96d1577;
    border-top-style: none;
    border-right-style: none;
  }
  :checked:before {
    -webkit-transform: rotate(-45deg) scale(1, 1);
    transform: rotate(-45deg) scale(1, 1);
  }
  :after {
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1rem;
    height: 1rem;
    margin: 0;
    content: "";
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #d8d8d8;
    background: #ffffff;
  }
`;

const DefaultCheckBox: FC<Props> = ({ handleClick }) => {
  return <StyledCheckBox onClick={handleClick} />;
};

export default DefaultCheckBox;
