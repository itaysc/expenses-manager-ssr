import types from './types';
import APIError from '../APIError';
import axios from 'axios';
export const GetOutcomesItemData2 = (ItemId, token = null)=> async(dispatch, getState, {api}) =>{
    try{
        let state = getState();
        if(token || state.loginData.token){
            let req = {
                ItemId,
                Token: token?token: state.loginData.token
            }
            let response = await api.post('api/MenuItems/GetOutcomesItemData', req);
            
        }else{
            throw({Message: "Unauthorized.", errorCode:401});
        }
        
         dispatch({type: types.GET_ITEM_DATA, payload: response.data});
    }catch(err){
         dispatch({type:"API_ERROR", payload: new APIError(err)});
    }
}

export const GetOutcomesItemData = (ItemId, token = null)=> (dispatch, getState, {api}) =>{
    try{
        let state = getState();
        //if(token || state.loginData.token){
            let req = {
                ItemId,
                Token: token?token: state.loginData.token
            }
            api.get('api/MenuItems/GetOutcomesItemData').then(response=>{
                dispatch({type: types.GET_ITEM_DATA, payload: response.data});
            }).catch(err=>{
                console.log(err)
            });
            
      //  }else{
       //     throw({Message: "Unauthorized.", errorCode:401});
       // }
        
        
    }catch(err){
         dispatch({type:"API_ERROR", payload: new APIError(err)});
    }
}

export const fetchItemData = (itemId)=>{
    try{

    }catch(err){
        dispatch({type:"API_ERROR", payload: new APIError(err.message, err)});
    }
}

export const getUserCategories = (token = null)=> async(dispatch, getState, {api}) =>{
    try{
        let state = getState();
        //if(token || state.loginData.token){
        //    let req={Token: token?token: state.loginData.token}
            let response = await api.get('api/MenuItems/GetUserCategories');
            dispatch({type: types.GET_USER_CATEGORIES, payload: response.data.Categories});
     //   }else{
            //throw({Message: "Unauthorized.", errorCode:401});
     //   }
    }catch(err){
        console.log(`inside getUserCategories err ${err}`);
        dispatch({type:"API_ERROR", payload: new APIError(err, err, err.errorCode)});
    }
}

