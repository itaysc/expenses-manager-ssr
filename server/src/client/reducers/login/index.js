import types from '../../actions/login/types';

export default (state = {token: null}, action) =>{
    switch(action.type){
      case types.SAVE_TOKEN: return {...state, token: action.payload}
    }
    return state;
  }