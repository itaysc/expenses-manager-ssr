export const types ={
    LOGIN: 'LOGIN'
} 
export const login = (credentials) => async (dispatch, getState, api) => {
    try{
        const res = await api.post('/signin', credentials);
        dispatch({type: types.LOGIN, payload: res.data.token });
    }catch(err){
        dispatch({type: types.LOGIN, payload: -99 });
    }

};

function testErr(err){
    console.log(err);
}