import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import Auth0ProviderWithHistory from "./provider/Auth0ProviderWithHistory";
import AuthContextProvider from "./provider/AuthContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
