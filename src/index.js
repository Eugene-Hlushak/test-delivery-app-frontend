import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.js';
import App from '../src/components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-delivery-app-frontend">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
