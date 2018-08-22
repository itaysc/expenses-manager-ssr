import { combineReducers } from 'redux';
import loginData from './login';
import menuItemData from './menuItem';
import apiErrorData from './apiErrors';
import server from './server';
const rootReducer = combineReducers({
    loginData,
    menuItemData,
    apiErrorData,
    server
});

export default rootReducer;
