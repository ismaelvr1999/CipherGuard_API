import jwt from "jsonwebtoken";
import development from "../config/development";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

const verifyToken =  (token) => {
  try {
    if (!token) {
      throw new MessageResponse(httpStatus.UNAUTHORIZED, "token didn't send", {
        validity: false,
      });
    }
    const decoded =  jwt.verify(token, development.SECRET_KEY);
    return new MessageResponse(httpStatus.OK, "valid token", {
        validity: true,
      });
  } catch (exception) {
    throw new MessageResponse(httpStatus.UNAUTHORIZED, exception.message, {
      validity: false,
    });
  }
};
export default { verifyToken };
