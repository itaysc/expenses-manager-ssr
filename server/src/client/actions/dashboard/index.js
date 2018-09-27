import types from './types';
import APIError from '../APIError';
import Cookies from 'universal-cookie';

export function getDashboardData(){
    return async function (dispatch, getState, {api}){
        try{
            let state = getState();
           // if(token || state.loginData.token){
                // let req = {
                //     Token: token?token: state.loginData.token
                // }
                let response = await api.get('api/Dashboard/GetDashboardData', {});
                dispatch({type: types.GET_DASHBOARD_DATA, payload: response.data});
          //  }else{
          //      throw({Message: "Unauthorized.", errorCode:401});
          //  }
        }catch(err){
            console.log(err)
             dispatch({type:"API_ERROR", payload: new APIError(err)});
        }
    }
}