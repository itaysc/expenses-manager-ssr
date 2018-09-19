import { combineReducers } from 'redux';
import loginData from './login';
import menuItemData from './menuItem';
import dashboardData from './dashboard';
import apiErrorData from './apiErrors';
import server from './server';
const rootReducer = combineReducers({
    loginData,
    menuItemData,
    apiErrorData,
    server,
    dashboardData
});

export default rootReducer;
