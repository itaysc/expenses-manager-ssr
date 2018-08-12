import { combineReducers } from 'redux';
import loginData from './login';
import apiErrorData from './apiErrors';
const rootReducer = combineReducers({
    loginData,
    apiErrorData
});

export default rootReducer;
