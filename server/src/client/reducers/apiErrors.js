export default (state = null, action) =>{
    switch(action.type){
      case "API_ERROR": return action.payload;
    }
    return state;
  }