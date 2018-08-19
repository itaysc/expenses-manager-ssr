import { combineReducers } from 'redux';
import loginData from './login';
import menuItemData from './menuItem';
import apiErrorData from './apiErrors';
const rootReducer = combineReducers({
    loginData,
    menuItemData,
    apiErrorData
});

export default rootReducer;
