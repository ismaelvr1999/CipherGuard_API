import httpStatus from "http-status";
import MessageResponse from "../models/messageResponse";
import passport from "../models/passport";

const addPassport = async(passportRequest)=>{
    const passportModel = new passport();
    await passportModel.addPassport(passportRequest);
    return new MessageResponse(httpStatus.CREATED,httpStatus["201_MESSAGE"]);
};
const getAllPassports = async(user_id)=>{
    const passportModel = new passport();
    const result = await passportModel.getAllPassports(user_id);
    return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result);
};

const getPassport = async(passport_id,user_id)=>{
    const passportModel = new passport();    
    const result = await passportModel.getPassport(passport_id,user_id);
    return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result[0]);
};

const getTotalPassportsByUser = async(user_id)=>{
    const passportModel = new passport();    
    const result = await passportModel.getTotalPassportsByUser(user_id);
    return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result[0]);
};

const updatePassport = async (passportRequest, user_id) => {
    const passportModel = new passport(); 
    const result = await passportModel.updatePassport(
      passportRequest,
      user_id
    );
    if (result.affectedRows === 1) {
      return new MessageResponse(httpStatus.OK, result.info, {
        affectedRows: result["affectedRows"],
      });
    } else {
      throw new MessageResponse(httpStatus.BAD_REQUEST, result.info, {
        affectedRows: result["affectedRows"],
      });
    }
  };

  const deletePassport = async (passport_id, user_id) => {
    const passportModel = new passport();
    const result = await passportModel.deletePassport(passport_id, user_id);
  
    if (result.affectedRows === 1) {
      return new MessageResponse(httpStatus.OK, httpStatus["200_MESSAGE"], {
        affectedRows: result["affectedRows"],
      });
    } else {
      throw new MessageResponse(httpStatus.BAD_REQUEST,httpStatus["400_MESSAGE"], {
        affectedRows: result["affectedRows"],
      });
    }
  };

  const searchPassport = async (searchValue,user_id) => {
    const passportModel = new passport();
    const result = await passportModel.searchPassport(searchValue,user_id);
    const message = result.length === 0 ?"Results no found":httpStatus["200_MESSAGE"] ;
    return new MessageResponse(httpStatus.OK, message, result);
  };

export default {
    addPassport,
    getAllPassports,
    getPassport,
    getTotalPassportsByUser,
    updatePassport,
    deletePassport,
    searchPassport
};