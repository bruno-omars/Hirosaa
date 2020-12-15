import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";
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

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
