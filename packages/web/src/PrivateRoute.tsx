import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Redirect } from "react-router-dom";
import TwoColumn from "./components/Templates/TwoColumn";
import LoginSidebar from "./components/Organisms/Sidebar/LoginSidebar";

type Props = {
  component: FC;
  path: string;
  exact?: boolean;
};

const PrivateRoute: FC<Props> = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Route path={props.path} exact={props.exact}>
      <TwoColumn>
        <LoginSidebar />
        <props.component />
      </TwoColumn>
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
