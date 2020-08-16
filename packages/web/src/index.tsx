import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://allowed-herring-99.hasura.app/v1/graphql',
    headers: {
      // Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
    }
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider
        domain="dev-ln5xv29l.us.auth0.com"
        clientId="0k3UZsiJifdOlHJ0u00g672Ch1jzstxR"
        redirectUri={'http://localhost:3000/callback'}
      >
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
