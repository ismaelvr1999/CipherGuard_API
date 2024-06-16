import httpStatus from "http-status";

class MessageResponse {
    constructor(status = null, message = "",data= null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
export default MessageResponse;