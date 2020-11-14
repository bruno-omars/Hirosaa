import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
  leftColumn?: string;
  rightColumn?: string;
  HCenter?: boolean;
  VCenter?: boolean;
  defaultStyle?: boolean;
};

const DefaultStyle = css`
  grid-template-columns: 1fr 0.2fr;
  justify-items: center;
  margin-top: 60px;
`;

const StyledDiv = styled.div<Props>`
  display: grid;
  ${({ defaultStyle }) => defaultStyle && DefaultStyle};
  grid-template-columns: ${({ leftColumn, rightColumn }) => `${leftColumn} ${rightColumn}`};
  min-height: 100vh;
  ${({ HCenter, VCenter }) => {
    if (HCenter && VCenter) {
      return 'place-items: center';
    } else if (HCenter) {
      return 'justify-items: center';
    } else if (VCenter) {
      return 'align-items: center';
    }
  }}
`;

const TwoColumn: FC<Props> = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default TwoColumn;
