import {types} from '../../actions/login';

export default (state = {token: null}, action) =>{
    switch(action.type){
      case types.LOGIN: return {...state, token: action.payload};
    }
    return state;
  }