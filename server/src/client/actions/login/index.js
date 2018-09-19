import types from './types';
import APIError from '../APIError';
import Cookies from 'universal-cookie';
export const signUp = (req)=> async(dispatch, getState, {api}) =>{
    try{
        let response = await api.post('api/auth/SignUp', req);
        dispatch({type: types.SIGNUP, payload: res.data});
    }catch(err){
        dispatch({type:"API_ERROR", payload: new APIError(err.message, err)});
    }
}

export const signIn = (req)=> async(dispatch, getState, {api}) =>{
    try{
        
        let response = await api.post('api/auth/SignIn', req);
        
        if(response.status === 200){
            dispatch({type:types.SAVE_TOKEN, payload: response.data.Token});
            const cookies = new Cookies();
            cookies.set('token', response.data.Token, { path: '/' });
        }else{
            throw(new APIError(response.data, null));
        }
    }catch(err){
        dispatch({type:"API_ERROR", payload: err});
    }
}

export const testGql= ()=> async(dispatch, getState, {gql}) =>{
    const res = await gql.post("graphql", {query: "{hello}"});
    dispatch({type:"GQL_TEST", payload:res.data});
}