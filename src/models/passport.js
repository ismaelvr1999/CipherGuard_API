import pool from "../db/pool";
import crypto from "crypto";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

class passport {
  async addPassport(passportRequest) {
    try {
      passportRequest.passport_id = crypto.randomUUID();
      const sql = `INSERT INTO passports (passport_id,user_id,first_name,last_name,passport_number,nationality,date_of_birth,issue_date,expiration_date,status,commentary) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
      await pool.query(sql, [
        passportRequest.passport_id,
        passportRequest.user_id,
        passportRequest.first_name,
        passportRequest.last_name,
        passportRequest.passport_number,
        passportRequest.nationality,
        passportRequest.date_of_birth,
        passportRequest.issue_date,
        passportRequest.expiration_date,
        passportRequest.status,
        passportRequest.commentary,
      ]);
    } catch (exception) {
      console.log(exception.message);
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async getAllPassports(user_id) {
    try {
      const sql =
        "SELECT * FROM passports WHERE user_id = ? ORDER BY create_date DESC";
      const [result] = await pool.query(sql, [user_id]);

      return result;
    } catch (exception) {
      console.log(exception.message);
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async getPassport(passport_id, user_id) {
    try {
      const [result] = await pool.query(
        "SELECT * FROM passports WHERE passport_id = ? AND user_id = ?",
        [passport_id, user_id]
      );
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async getTotalPassportsByUser(user_id) {
    try {
      const [result] = await pool.query(
        "SELECT COUNT(*) as total FROM passports WHERE user_id = ? ",
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
  
  async updatePassport(passportRequest, user_id) {
    try {
      const sql = `UPDATE passports SET ?,last_modification = CURRENT_TIMESTAMP() WHERE passport_id = ? AND user_id = ?  `;
      const [result] = await pool.query(sql, [
        passportRequest,
        passportRequest.passport_id,
        user_id
      ]);
      return result;
    } catch (exception) {
      console.log(exception.message);
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async deletePassport(passport_id, user_id) {
    try {
      const sql =
        "DELETE FROM passports WHERE passport_id = ? AND user_id = ?  ";
      const [result] = await pool.query(sql, [passport_id, user_id]);
      return result;
    } catch (exception) {
      throw new MessageResponse(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpStatus["500_MESSAGE"]
      );
    }
  }

  async searchPassport(searchValue, user_id) {
    try {
      const sqlLike = `LIKE '%${searchValue}%'`;
      const sqlWhere = `( first_name ${sqlLike} OR last_name ${sqlLike} OR passport_number ${sqlLike} OR  nationality ${sqlLike} OR issue_date ${sqlLike} OR expiration_date ${sqlLike} OR status ${sqlLike}) AND user_id = '${user_id}'`;
      const sql = `SELECT * FROM passports WHERE ${sqlWhere}`;
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

export default passport;
