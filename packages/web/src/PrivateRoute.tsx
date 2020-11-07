import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";
import TwoColumn from "./components/Templates/TwoColumn";
import LoginSidebar from "./components/Organisms/Sidebar/LoginSidebar";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  width: 90%;
`;

type Props = {
  component: FC;
  path: string;
  exact?: boolean;
};

const PrivateRoute: FC<Props> = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Route path={props.path} exact={props.exact}>
      <TwoColumn leftColumn="20%" rightColumn="80%" HCenter>
        <LoginSidebar />
        <StyledDiv>
          <props.component />
        </StyledDiv>
      </TwoColumn>
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
