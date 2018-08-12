import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import APIErrorsAlert from '../client/components/APIErrorsAlert';

const App = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
      <APIErrorsAlert/>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
