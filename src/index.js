import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize-scss'
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from './core/configureStore'

const store = configureStore();

const generateHash = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
ReactDOM.render(
  <Provider store={store} hash={generateHash}>
    <App />
  </Provider>
  
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
