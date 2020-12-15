import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import GuestSidebar from "../Organisms/Sidebar/GuestSidebar";
import LoginSidebar from "../Organisms/Sidebar/LoginSidebar";
import TwoColumn from "./TwoColumn";

const StyledDiv = styled.div`
  height: 100%;
  width: 90%;
`;

export const AppContainer: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <TwoColumn leftColumn="20%" rightColumn="80%" HCenter>
        <GuestSidebar />
        {children}
      </TwoColumn>
    );
  }

  return (
    <TwoColumn leftColumn="20%" rightColumn="80%" HCenter>
      <LoginSidebar />
      <StyledDiv>{children}</StyledDiv>
    </TwoColumn>
  );
};
