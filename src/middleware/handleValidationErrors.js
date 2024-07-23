import httpStatus from "http-status";
import MessageResponse from "../models/messageResponse";
import { validationResult } from "express-validator";

const handleValidationErrors  = (req,res,next)=>{
    try{
      validationResult(req).throw();
      next();
    }
    catch(exception){
      const messageResponse = new MessageResponse(httpStatus.BAD_REQUEST,httpStatus["400_MESSAGE"],exception.mapped());
      return res.status(messageResponse.status).send(messageResponse);
    }
};

export default handleValidationErrors;