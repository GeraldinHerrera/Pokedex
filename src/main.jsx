// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Pages/App/App';
import './index.css';

import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
