export default class APIError{
    constructor(data, ex, errorCode){
        this. data = data;
        this.exception = ex;
        this.errorCode = errorCode;
    }
}