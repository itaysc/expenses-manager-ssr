import types from './types';
import APIError from '../APIError';
import Cookies from 'universal-cookie';

export const getDashboardData = (token = null)=> async(dispatch, getState, {api}) =>{
    try{
        let state = getState();
        if(token || state.loginData.token){
            let req = {
                Token: token?token: state.loginData.token
            }
            let response = await api.post('api/Dashboard/GetDashboardData', req);
            dispatch({type: types.GET_DASHBOARD_DATA, payload: response.data});
        }else{
            throw({Message: "Unauthorized.", errorCode:401});
        }
    }catch(err){
         dispatch({type:"API_ERROR", payload: new APIError(err)});
    }
}