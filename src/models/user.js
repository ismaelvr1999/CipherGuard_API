import pool from "../db/pool";
import MessageResponse from "./messageResponse";
import httpStatus from "http-status";
import crypto from "crypto";
class user {

  async signUp(newUser) {
    try {
      const id = crypto.randomUUID();
      const [result, fields] = await pool.query(
        "INSERT INTO users(user_id,first_name,last_name,email,master_password) VALUES(?,?,?,?,?)",
        [id,newUser.firstName, newUser.lastName, newUser.email, newUser.password]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(httpStatus.BAD_REQUEST, exception.message);
    }
  }

}

export default user;
