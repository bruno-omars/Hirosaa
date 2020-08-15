import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { User } from './generated/graphql';
import styled from 'styled-components';

import Default from './components/Atoms/Buttons/Default';
import RoundedButton from './components/Atoms/Buttons/RoundedButton';
import CircleButton from './components/Atoms/Buttons/CircleButton';
import DefaultLink from './components/Atoms/Links/Default';
import IconLink from './components/Atoms/Links/IconLink';
import { ReactComponent as Chat } from './assets/icons/chat.svg';

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
      <Default clickHandler={() => {}}>ログイン</Default>
      <RoundedButton clickHandler={() => {}}>ログイン</RoundedButton>
      <CircleButton clickHandler={() => {}}>a</CircleButton>
      <Router>
        <DefaultLink to="#">HELLO</DefaultLink>
        <IconLink to="#" text="HELLO"><Chat /></IconLink>
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
