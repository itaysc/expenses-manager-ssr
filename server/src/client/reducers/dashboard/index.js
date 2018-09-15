import types from '../../actions/dashboard/types';

export default (state = null, action) =>{
    switch(action.type){
      case types.GET_DASHBOARD_DATA: return {...state, token: action.payload}
    }
    return state;
  }