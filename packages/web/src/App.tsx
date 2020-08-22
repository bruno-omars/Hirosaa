import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { useUsersQuery } from "./generated/graphql";
import CircleListPage from "./components/Pages/CircleListPage";
import AboutPage from "./components/Pages/AboutPage";
import TwoColumn from "./components/Templates/TwoColumn";
import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import PrivateRoute from "./PrivateRoute";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App: FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { loading, error, data } = useUsersQuery();

  if (loading || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  console.log(isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={GuestSidebar}>
            <TwoColumn>
              <GuestSidebar />
              <AboutPage />
            </TwoColumn>
          </Route>

          <PrivateRoute path="/circle" component={CircleListPage} exact />

          <Route path="*">
            <Redirect to={{ pathname: "/login" }} />
          </Route>
        </Switch>
      </Router>
      <Title>Users</Title>
      {data?.User.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default App;
