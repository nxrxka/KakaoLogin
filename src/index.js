// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import any global CSS styles if needed

if (window.Kakao) {
  window.Kakao.init(process.env.REACT_APP_KAKAO_REST_API_KEY);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
