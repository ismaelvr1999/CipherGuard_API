import pool from "../db/pool";
import crypto from "crypto";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

class websiteAccount {
  async getAllWebsiteAccounts(user_id) {
    try {
      const [result] = await pool.query(
        "SELECT * FROM website_accounts WHERE user_id = ? ORDER BY creation_date DESC",
        [user_id]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async addWebsiteAccount(websiteAccount) {
    try {
      const id = crypto.randomUUID();

      const [result] = await pool.query(
        "INSERT website_accounts(page_id,user_id,page_name,email,category,commentary,password,user_name) VALUES (?,?,?,?,?,?,?,?)",
        [
          id,
          websiteAccount.user_id,
          websiteAccount.page_name,
          websiteAccount.email,
          websiteAccount.category,
          websiteAccount.commentary,
          websiteAccount.password,
          websiteAccount.user_name,
        ]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }
  async getWebsiteAccount(page_id, user_id) {
    try {
      const [result] = await pool.query(
        "SELECT * FROM website_accounts WHERE page_id = ? AND user_id = ?",
        [page_id, user_id]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async getTotalWebAccountsByUser(user_id) {
    try {
      const [result] = await pool.query(
        "SELECT COUNT(*) as total FROM website_accounts WHERE user_id = ?",
        [user_id]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async updateWebAccount(websiteAccount, user_id) {
    try {
      const sql = `UPDATE website_accounts  SET ? , last_modification = CURRENT_TIMESTAMP() WHERE page_id = ? AND user_id = ?  `;
      const [result] = await pool.query(sql, [
        websiteAccount,
        websiteAccount.page_id,
        user_id,
      ]);
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async deleteWebAccount(page_id, user_id) {
    try {
      const sql =
        "DELETE FROM website_accounts WHERE page_id = ? AND user_id = ?  ";
      const [result] = await pool.query(sql, [page_id, user_id]);
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async searchWebAccount(searchValue, user_id) {
    try {
      const sqlLike = `LIKE '%${searchValue}%'`;
      const sqlWhere = `(page_name ${sqlLike} OR email ${sqlLike} OR category ${sqlLike} OR  user_name ${sqlLike}) AND  user_id = '${user_id}'`;
      const sql = `SELECT * FROM website_accounts WHERE ${sqlWhere}`;
      const [result] = await pool.query(sql);
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }
}
export default websiteAccount;
