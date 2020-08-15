import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { User } from './generated/graphql';
import styled from 'styled-components';
import Default from './components/Atoms/Buttons/Default';
import RoundedButton from './components/Atoms/Buttons/RoundedButton';
import CircleButton from './components/Atoms/Buttons/CircleButton';

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
