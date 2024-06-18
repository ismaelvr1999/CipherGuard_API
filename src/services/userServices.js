import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import user from "../models/user";


const signUp = async (newUser) => {
  const userModel = new user();
  const result = await userModel.signUp(newUser);

  return new MessageResponse(httpStatus.CREATED,httpStatus["201_MESSAGE"],
  {firstName:newUser.firstName,lastName:newUser.lastName,email:newUser.email});
};

const getUser = async (id) => {
  const userModel = new user();
  const result = await userModel.getUser(id);
  if(result.length == 0) throw new MessageResponse(httpStatus.BAD_REQUEST, "Missing required fields");
  return new MessageResponse(httpStatus.OK,"User found",result[0]);
};


export default { signUp,getUser };
