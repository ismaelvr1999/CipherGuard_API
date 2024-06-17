import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import user from "../models/user";


const signUp = async (newUser) => {
  const userModel = new user();
  const result = await userModel.signUp(newUser);

  return new MessageResponse(httpStatus.CREATED,"User created",
  {firstName:newUser.firstName,lastName:newUser.lastName,email:newUser.email});
};

export default { signUp };
