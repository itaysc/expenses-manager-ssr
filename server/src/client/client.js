// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';
import './style/main.css';
import './style/table.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

const gql = axios.create({
  baseURL: '/gql/graphql'
});

  // Set the AUTH token for any request
  api.interceptors.request.use(function (config) {
    const token = cookies.get("token");
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

const initialState = typeof window !== "undefined" && window && window.INITIAL_STATE;
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument({api, gql}))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
