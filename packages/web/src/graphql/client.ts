import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { concatPagination, getMainDefinition } from "@apollo/client/utilities";
import {
  relayStylePagination,
  offsetLimitPagination,
} from "@apollo/client/utilities";
import { merge } from "lodash";
import { Messages } from "../generated/graphql";

const httpLink = (accessToken: string) =>
  new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-hasura-admin-secret":
        process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
    },
  });

const wsLink = (accessToken: string) =>
  new WebSocketLink({
    uri: "ws://localhost:8080/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "x-hasura-admin-secret":
            process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  });

const link = (accessToken: string) =>
  split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink(accessToken),
    httpLink(accessToken)
  );

export const createApolloClient = (accessToken: string) =>
  new ApolloClient({
    link: link(accessToken),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            Messages: {
              merge(existing = [], incoming: any[]) {
                console.warn("incoming", incoming);
                return [...existing, ...incoming];
              },
            },
            // Messages: concatPagination(),
          },
        },
      },
    }),
  });
