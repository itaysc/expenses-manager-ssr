import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default req => {
  const api = axios.create({
    baseURL: 'http://localhost:62434/',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const gql = axios.create({
    baseURL: 'http://localhost:4000/graphql',
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument({api, gql}))
  );

  return store;
};
