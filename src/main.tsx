import React from 'react';
import ReactDOM from 'react-dom/client';
import { createClient, WagmiProvider } from 'wagmi';
import App from './App';
import './index.css';

const client = createClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider client={client}>
      <App />
    </WagmiProvider>
  </React.StrictMode>
);
