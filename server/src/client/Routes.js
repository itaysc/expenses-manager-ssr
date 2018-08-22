import React from 'react';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MenuItem from './pages//MenuItem';
export default [
  {
    ...App,
    routes: [
      {
        ...Login,
        path: '/',
        exact: true
      },
      {
        ...Dashboard,
        path:'/Dashboard',
        exact: true
      },
      {
        ...Login,
        path: '/login',
        exact: true
      },
      {
        ...MenuItem,
        path: '/MenuItem/:itemId',
        exact: false
      },
    ]
  }
];
