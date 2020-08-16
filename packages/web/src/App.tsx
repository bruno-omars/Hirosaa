import React, { FC } from "react";
import { useUsersQuery } from "./generated/graphql";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import LoginSidebar from "./components/Organisms/Sidebar/LoginSidebar";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App: FC = () => {
  const { loading, error, data } = useUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <div className="App">
      <Router>
        {/* <GuestSidebar /> */}
        <LoginSidebar />
      </Router>
      <Title>Users</Title>
      {data?.User.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
};

export default App;
