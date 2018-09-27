import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';
import Cookies from 'universal-cookie';



export default req => {
  const cookies = new Cookies(req.headers.cookie);
  const api = axios.create({
    baseURL: 'http://localhost:62434/',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  // Set the AUTH token for any request
  api.interceptors.request.use(function (config) {
    const token = cookies.get("token");
    //console.log(`inside axios interceptor: ${token}`)
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
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
