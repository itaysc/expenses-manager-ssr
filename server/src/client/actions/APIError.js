export default class APIError{
    constructor(data){
        this. data = data;
        this.exception = data.exception;
        this.errorCode = data.errorCode;
    }
}

export const hideApiErrorMessage = ()=>{
    return{
        type: "HIDE_API_ERROR_MESSAGE",
        payload: null
    }
}