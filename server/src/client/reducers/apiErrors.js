export default (state = {error:null, showError: false}, action) =>{
    switch(action.type){
      case "API_ERROR": return {...state, error:action.payload, showError:true};
      case "HIDE_API_ERROR_MESSAGE": return {...state, showError:false}
    }
    return state;
  }