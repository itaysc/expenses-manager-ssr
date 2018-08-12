import React from 'react';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Test from './components/Test';

export default [
  {
    ...App,
    routes: [
      {
        ...Test,
        path:'Test'
      },
      {
        ...Dashboard,
        path:'/Dashboard',
        exact: true
      },
      {
        ...Login,
        path: '/',
        exact: true
      },
      {
        ...Login,
        path: '/login',
        exact: true
      },
    ]
  }
];
