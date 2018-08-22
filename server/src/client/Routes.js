import React from 'react';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MenuItem from './pages//MenuItem';
export default [
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
  {
    ...App,
    routes: [
      {
        ...Dashboard,
        path:'/Dashboard',
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
