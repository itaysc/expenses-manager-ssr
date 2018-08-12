import types from './types';
export const signUp = (req)=> async(dispatch, getState, api) =>{
    try{
        let response = await api.post('api/auth/SignUp', req);
        dispatch({type: types.SIGNUP, payload: res.data});
    }catch(err){
        dispatch({type:"API_ERROR", payload: err});
    }
}

export const signIn = (req)=> async(dispatch, getState, api) =>{
    try{
        let response = await api.post('api/auth/SignIn', req);
        if(response.data && response.data.IsOk){
            dispatch({type:types.SAVE_TOKEN, payload: response.data.Token});
            
        }else{
            throw(response.data);
        }
    }catch(err){
        dispatch({type:"API_ERROR", payload: err});
    }
}