import { ApolloClient } from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Cache } from '../../apolloClient';
import { Theme } from '../../theme';
import PageView from '../PageView';
import ErrorBoundary from './ErrorBoundary';
import ModalStack from './ModalStack';
import ProvidedIntlProvider from './ProvidedIntlProvider';
import Routes from './Routes';
import StoreProvider from './StoreProvider';
import ToastQueue from './ToastQueue';

export type AppProps = Readonly<{
  theme: Theme;
  apolloClient: ApolloClient<Cache>;
}>;

export const App: React.SFC<AppProps> = ({ apolloClient, theme }) => (
  <Router>
    <ApolloProvider client={apolloClient}>
      <ProvidedIntlProvider>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <ErrorBoundary>
              <PageView />
              <Routes />
              <ModalStack />
              <ToastQueue />
            </ErrorBoundary>
          </StoreProvider>
        </ThemeProvider>
      </ProvidedIntlProvider>
    </ApolloProvider>
  </Router>
);

export default App;
