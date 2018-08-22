import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Cookies from 'universal-cookie';

const app = express();

app.use(
  '/api',
  proxy('http://localhost:62434/', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);
app.use(express.static('public'));

app.post("enableUser", (req, res)=>{
  let token = req.token;
  cookies.set('token', token, { path: '/' });
})

app.post("getUser", (req, res)=>{
  const cookies = new Cookies(req.headers.cookie);
  return cookies.get('token');
})

app.get('*', (req, res) => {
  
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      // console.log(`req.path is: ${req.path}`)
      return route.loadData ? route.loadData(store, req) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
