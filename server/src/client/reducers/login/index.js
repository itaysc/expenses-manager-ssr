import types from '../../actions/login/types';

export default (state = {token: null}, action) =>{
    switch(action.type){
      case types.SAVE_TOKEN: return {...state, token: action.payload};
      case "GQL_TEST": return {...state, gqlData:action.payload};
    }
    return state;
  }