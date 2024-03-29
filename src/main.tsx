import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MainCore } from './main.core.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainCore>
      <App />
    </MainCore>
  </React.StrictMode>,
);
