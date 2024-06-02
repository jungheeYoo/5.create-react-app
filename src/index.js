import React from 'react';
// import ReactDOM from 'react-dom'; // 에러 뜸
import ReactDOM from 'react-dom/client';
import App from './App';
// import './styles.css'; // css 파일 만들어서 하는 법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 에러 뜸
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
