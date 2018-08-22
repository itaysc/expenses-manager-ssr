import types from '../../actions/server/types';

export default (state = {isServerRefresh: false}, action) =>{
    switch(action.type){
      case types.SERVER_REFRESH: return {...state, isServerRefresh: action.payload}
    }
    return state;
  }