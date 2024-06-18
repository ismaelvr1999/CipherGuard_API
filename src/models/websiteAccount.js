import pool from "../db/pool";
import crypto from "crypto";
import MessageResponse from "../models/messageResponse";

class websiteAccount {

  async getAllWebsiteAccounts(userId) {
    try {
      const [result] = await pool.query("SELECT * FROM website_accounts WHERE user_id = ?",[userId]);
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async addWebsiteAccount(websiteAccount){
    try {
        const id = crypto.randomUUID();
        //const hashedPassword = bcrypt.hashSync(newUser.password,development.SALT_ROUNDS)
        const [result] = 
        await pool.query("INSERT website_accounts(page_id,user_id,page_name,email,category,commentary,password) VALUES (?,?,?,?,?,?,?)",
        [id,websiteAccount.user_id,websiteAccount.page_name,websiteAccount.email,websiteAccount.category,websiteAccount.commentary,websiteAccount.password])
        return result;
    } catch (exception) {
        throw new MessageResponse(httpStatus.BAD_REQUEST, "Missing required fields");
    }
  }
}
export default websiteAccount
