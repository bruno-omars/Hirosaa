import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { User } from './generated/graphql';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

import GuestSidebar from './components/Organisms/Sidebar/GuestSidebar';
import LoginSidebar from './components/Organisms/Sidebar/LoginSidebar';

const GET_USERS = gql`
  query {
    User {
      id
      name
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App: FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  console.log(isAuthenticated);
  console.log(user);

  return (
    <div className="App">
      <Router>
        {isAuthenticated ? <LoginSidebar /> : <GuestSidebar />}
      </Router>
      <Title>
        Users
      </Title>
      {data.User.map((user: User) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </div>
  );
}

export default App;
