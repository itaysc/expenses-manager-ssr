import types from '../../actions/menuItem/types';

export default (state = {token: null}, action) =>{
    switch(action.type){
      case types.GET_ITEM_DATA: return {...state, data: action.payload}
      case types.GET_USER_CATEGORIES: return {...state, userCategories: action.payload}
    }
    return state;
  }