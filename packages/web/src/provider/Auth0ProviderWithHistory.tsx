import React, { FC } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory: FC = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';

  if (domain === '' || clientId === '') {
    console.error('clientIdまたはdomainを環境変数に設定してください');
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;