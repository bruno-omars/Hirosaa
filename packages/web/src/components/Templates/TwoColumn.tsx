import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  min-height: 100vh;
  justify-items: center;
`;

type Props = {
  children: ReactNode;
};

const TwoColumn: FC<Props> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default TwoColumn;
