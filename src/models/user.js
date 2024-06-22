import pool from "../db/pool";
import MessageResponse from "./messageResponse";
import httpStatus from "http-status";
import crypto from "crypto";
import bcrypt from "bcrypt";
import development from "../config/development";
class user {
  async signUp(newUser) {
    try {
      const id = crypto.randomUUID();
      const hashedPassword = bcrypt.hashSync(
        newUser.password,
        development.SALT_ROUNDS
      );
      const [result] = await pool.query(
        "INSERT INTO users(user_id,first_name,last_name,email,master_password) VALUES(?,?,?,?,?)",
        [id, newUser.firstName, newUser.lastName, newUser.email, hashedPassword]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        "Missing required fields"
      );
    }
  }

  async getUser(id) {
    const [result] = await pool.query(
      "SELECT user_id,first_name,last_name,email FROM users WHERE user_id = ?",
      [id]
    );
    if (result.length == 0) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        httpStatus["400_MESSAGE"]
      );
    }
    return result;
  }

  async login(email) {
    const [result] = await pool.query("SELECT user_id,master_password FROM users WHERE email = ?", [
      email,
    ]);
    if (result.length == 0) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        httpStatus["400_MESSAGE"]
      );
    }
    return result;
  }
}

export default user;
