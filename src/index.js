import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from'redux-promise';  // for AJAX calls
import routes from './routes';
import reducers from './reducers';
import 'react-mdl/extra/material.js';

//ReduxPromise is applied as middleware.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
