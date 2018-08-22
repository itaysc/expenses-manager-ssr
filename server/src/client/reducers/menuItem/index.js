import types from '../../actions/menuItem/types';

export default (state = {isServerRefresh: false}, action) =>{
    switch(action.type){
      case types.GET_ITEM_DATA: return {...state, ItemData: action.payload}
      case types.GET_USER_CATEGORIES: return {...state, userCategories: action.payload}
      case types.SERVER_REFRESH: return {...state, isServerRefresh: true}
    }
    return state;
  }