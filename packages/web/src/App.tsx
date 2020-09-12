import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import CircleListPage from "./components/Pages/CircleListPage";
import AboutPage from "./components/Pages/AboutPage";
import TwoColumn from "./components/Templates/TwoColumn";
import GuestSidebar from "./components/Organisms/Sidebar/GuestSidebar";
import PrivateRoute from "./PrivateRoute";
import CircleCreatePage from "./components/Pages/CircleCreatePage";
import CircleDetailPage from "./components/Pages/CircleDetailPage";
import UserDetailPage from "./components/Pages/UserDetailPage";

const App: FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  console.log(isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={GuestSidebar}>
            <TwoColumn>
              <GuestSidebar />
              <AboutPage />
            </TwoColumn>
          </Route>

          <PrivateRoute path="/circle" component={CircleListPage} exact />
          <PrivateRoute path="/circle-new" component={CircleCreatePage} exact />
          <PrivateRoute path="/circle-detail" component={CircleDetailPage} />
          <PrivateRoute path="/user-detail" component={UserDetailPage} />

          <Route path="*">
            <Redirect
              to={{ pathname: isAuthenticated ? "/circle" : "/login" }}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
