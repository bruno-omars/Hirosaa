import React, { FC, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client";
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
import UserEditPage from "./components/Pages/UserEditPage";
import { createApolloClient } from "./graphql/client";

const App: FC = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  if (isLoading) return <Spinner />;

  (async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch (e) {}
  })();

  return (
    <div className="App">
      <ApolloProvider client={createApolloClient(accessToken)}>
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
            <PrivateRoute path="/user-edit" component={UserEditPage} />

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
