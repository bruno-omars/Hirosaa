import React, { FC, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./provider/Auth0ProviderWithHistory";
import AuthContextProvider from "./provider/AuthContextProvider";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import CircleListPage from "./components/Pages/CircleListPage";
import AboutPage from "./components/Pages/AboutPage";
import TwoColumn from "./components/Templates/TwoColumn";
import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import PrivateRoute from "./PrivateRoute";
import CircleCreatePage from "./components/Pages/CircleCreatePage";
import CircleDetailPage from "./components/Pages/CircleDetailPage";
import UserDetailPage from "./components/Pages/UserDetailPage";

const App: FC = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  if (isLoading) return <p>Loading...</p>;

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

  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-hasura-admin-secret":
          process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
      },
    }),
    cache: new InMemoryCache(),
  });

  console.log("Login", isAuthenticated);

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/login" component={GuestSidebar}>
              <TwoColumn>
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
            <PrivateRoute path="/circle-detail" component={CircleDetailPage} />
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
