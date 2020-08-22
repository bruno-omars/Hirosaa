import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import LoginSidebar from "./components/Organisms/Sidebar/LoginSidebar";
import { useUsersQuery } from "./generated/graphql";

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
      <Router>{isAuthenticated ? <LoginSidebar /> : <GuestSidebar />}</Router>
      <Title>Users</Title>
      {data?.User.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default App;
