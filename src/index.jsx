import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Layout from './layout';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'), // as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
);
