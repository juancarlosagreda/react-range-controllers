import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <script src="../public/model.js"></script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

