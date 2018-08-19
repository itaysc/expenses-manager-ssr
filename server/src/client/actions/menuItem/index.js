import types from './types';
import APIError from '../APIError';
export const getItemData = (itemName)=> async(dispatch, getState, api) =>{
    try{
        let state = getState();
        if(state.loginData.token){
            let response = await api.post('api/MenuItems/GetItemData', req);
        }else{
            throw({message: "Unauthorized."});
        }
        
        dispatch({type: types.GET_ITEM_DATA, payload: res.data});
    }catch(err){
        dispatch({type:"API_ERROR", payload: new APIError(err.message, err)});
    }
}
export const getUserCategories = (token = null)=> async(dispatch, getState, api) =>{
    try{
        let state = getState();
        if(token || state.loginData.token){
            let req={Token: token?token: state.loginData.token}
            let response = await api.post('api/MenuItems/GetUserCategories', req);
            dispatch({type: types.GET_USER_CATEGORIES, payload: response.data.Categories});
        }else{
            //throw({Message: "Unauthorized.", errorCode:401});
        }
    }catch(err){
        console.log(`inside getUserCategories err ${err}`);
        dispatch({type:"API_ERROR", payload: new APIError(err, err, err.errorCode)});
    }
}

