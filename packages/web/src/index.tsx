import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { split, HttpLink } from "@apollo/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Auth0ProviderWithHistory from "./provider/Auth0ProviderWithHistory";
import AuthContextProvider from "./provider/AuthContextProvider";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

import "./index.css";

const httpLink = new HttpLink({
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    // Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
  },
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8080/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        // Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
        "x-hasura-admin-secret":
          process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0ProviderWithHistory>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Auth0ProviderWithHistory>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
