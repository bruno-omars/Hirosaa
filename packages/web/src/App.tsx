import React, { FC } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { 
  User
} from './generated/graphql';
const GET_USERS = gql`
  query {
    User {
      id
      name
    }
  }
`;

const App: FC = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! ${error.message}</p>;

  return (
    <div className="App">
      {data.User.map((user: User) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </div>
  );
}

export default App;
