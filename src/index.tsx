import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { resolvers, typeDefs } from './gql/resolvers';

import './index.css';
import App from './App';

import store from './redux/store';
import { ApolloClientCacheObject } from './types';

const link = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers
});

// write data on the client on page load
const clientData: ApolloClientCacheObject = {
  cartHidden: true
};

client.writeData({
  data: clientData
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate persistor={store.persistore}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
