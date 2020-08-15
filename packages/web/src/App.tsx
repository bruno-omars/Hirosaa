import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { User } from './generated/graphql';
import styled from 'styled-components';

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
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <div className="App">
      <Router>
        {/* <GuestSidebar /> */}
        <LoginSidebar />
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
