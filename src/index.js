import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'popper.js/dist/popper.js';
import 'bootstrap3/dist/js/bootstrap.js';
import './styles/fixed-width-light/js/init.js';
import './App.css';
import './styles/scss/main.scss';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
