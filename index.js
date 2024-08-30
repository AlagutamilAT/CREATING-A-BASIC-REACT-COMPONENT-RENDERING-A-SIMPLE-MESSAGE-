import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import './index.css';
import HelloReact from './HelloReact';

const rootElement = document.getElementById('root');

// Using React 18's new createRoot API
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelloReact />
  </React.StrictMode>
);
