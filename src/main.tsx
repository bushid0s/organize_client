import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/default.scss';
import App from './App.tsx';
import Layout from './Components/Layout/Layout.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </React.StrictMode>
);
