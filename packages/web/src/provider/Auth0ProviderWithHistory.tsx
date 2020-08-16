import React, { FC } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';
import { AppState } from '@auth0/auth0-react/dist/auth0-provider';

const Auth0ProviderWithHistory: FC = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

  const history = useHistory();

  if (domain === '' || clientId === '') {
    console.error('clientIdまたはdomainを環境変数に設定してください');
  }

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;