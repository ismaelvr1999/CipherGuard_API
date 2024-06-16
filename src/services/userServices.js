import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import user from "../models/user";

const signUp = async (newUser, callback) => {
  let userModel = new user();

  await userModel.signUp(newUser, (error, result) => {
    if (error)
      return callback(new MessageResponse(httpStatus.BAD_REQUEST, error.code));
    else
      return callback(
        new MessageResponse(httpStatus.CREATED, "user created", {
          id: result.insertId,
          ...newUser,
        })
      );
  });

  
};

export default { signUp };
