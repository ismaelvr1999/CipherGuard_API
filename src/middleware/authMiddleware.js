import jwt  from "jsonwebtoken";
import development from "../config/development";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

const authUser = ( req,res,next)=>{
    try{
    const  token = req.headers.authorization;
    //console.log(token)
    if(!token) {
        let messageResponse = new MessageResponse(httpStatus.UNAUTHORIZED,httpStatus["401_MESSAGE"])
        return res.status(messageResponse.status).send(messageResponse);
    }
    const decoded = jwt.verify(token,development.SECRET_KEY);
    req.user = decoded;
    next();
    }
    catch(exception){
        let messageResponse = new MessageResponse(httpStatus.UNAUTHORIZED,httpStatus["401_MESSAGE"])
        return res.status(messageResponse.status).send(messageResponse);
    }
}
export default {authUser};