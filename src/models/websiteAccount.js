import pool from "../db/pool";
import crypto from "crypto";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

class websiteAccount {
  async getAllWebsiteAccounts(user_id) {
    const [result] = await pool.query(
      "SELECT * FROM website_accounts WHERE user_id = ?",
      [user_id]
    );
    if (result.length == 0) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        httpStatus["400_MESSAGE"]
      );
    }
    return result;
  }

  async addWebsiteAccount(websiteAccount) {
    try {
      const id = crypto.randomUUID();
      //const hashedPassword = bcrypt.hashSync(newUser.password,development.SALT_ROUNDS)
      const [result] = await pool.query(
        "INSERT website_accounts(page_id,user_id,page_name,email,category,commentary,password) VALUES (?,?,?,?,?,?,?)",
        [
          id,
          websiteAccount.user_id,
          websiteAccount.page_name,
          websiteAccount.email,
          websiteAccount.category,
          websiteAccount.commentary,
          websiteAccount.password,
        ]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        httpStatus["400_MESSAGE"]
      );
    }
  }
  async getWebsiteAccount(page_id,user_id) {
    const [result] = await pool.query(
      "SELECT * FROM website_accounts WHERE page_id = ? AND user_id = ?",
      [page_id,user_id]
    );
    if (result.length == 0) {
      throw new MessageResponse(
        httpStatus.BAD_REQUEST,
        httpStatus["400_MESSAGE"]
      );
    }
    return result;
  }
}
export default websiteAccount;
