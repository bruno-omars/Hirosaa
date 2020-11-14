import React, { FC, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import CircleListPage from "./components/Pages/CircleListPage";
import AboutPage from "./components/Pages/AboutPage";
import TwoColumn from "./components/Templates/TwoColumn";
import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import PrivateRoute from "./PrivateRoute";
import CircleCreatePage from "./components/Pages/CircleCreatePage";
import CircleDetailPage from "./components/Pages/CircleDetailPage";
import ChatPage from "./components/Pages/ChatPage";
import UserDetailPage from "./components/Pages/UserDetailPage";
import CircleEditPage from "./components/Pages/CircleEditPage";
import Spinner from "./components/Atoms/Indicator/Spinner";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const App: FC = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  if (isLoading) return <Spinner />;

  const getAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };
  getAccessToken();


  const httpLink = new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
    },
  });
  
  const wsLink = new WebSocketLink({
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
  

  console.log("Login", isAuthenticated);

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/login" component={GuestSidebar}>
              <TwoColumn leftColumn="20%" rightColumn="80%" HCenter>
                <GuestSidebar />
                <AboutPage />
              </TwoColumn>
            </Route>

            <PrivateRoute path="/circle" component={CircleListPage} exact />
            <PrivateRoute
              path="/circle-new"
              component={CircleCreatePage}
              exact
            />
            <PrivateRoute path="/chat" component={ChatPage} />
            <PrivateRoute path="/circle-detail" component={CircleDetailPage} />
            <PrivateRoute path="/circle-edit" component={CircleEditPage} />
            <PrivateRoute path="/user-detail" component={UserDetailPage} />

            <Route path="*">
              <Redirect
                to={{ pathname: isAuthenticated ? "/circle" : "/login" }}
              />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
