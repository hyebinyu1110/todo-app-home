import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './modules/index.js';
import loggerMiddleware from './lib/loggerMiddleware';


const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
