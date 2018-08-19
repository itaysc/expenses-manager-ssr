import types from './types';
import APIError from '../APIError';
import Cookies from 'universal-cookie';


export const getCookie = (req)=> async(dispatch, getState, api) =>{
    try{
        const cookies = new Cookies();
        cookies.set('token', response.data.Token, { path: '/' });

    }catch(err){
        dispatch({type:"API_ERROR", payload: err});
    }
}