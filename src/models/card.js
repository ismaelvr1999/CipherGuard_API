import pool from "../db/pool";
import crypto from "crypto";
import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";

class card {
  async addCard(cardRequest) {
    try {
      cardRequest.card_id = crypto.randomUUID();
      const sql =
        "INSERT cards (card_id,user_id,type,cardholder_name,expiration_date,cvv,issuer,commentary) VALUES (?,?,?,?,?,?,?,?)";
      await pool.query(sql, [cardRequest.card_id,
        cardRequest.user_id,
        cardRequest.type,
        cardRequest.cardholder_name,
        cardRequest.expiration_date,
        cardRequest.cvv,
        cardRequest.issuer,
        cardRequest.commentary]);
    } catch (exception) {
        console.log(exception.message);
        throw new MessageResponse(httpStatus.INTERNAL_SERVER_ERROR,httpStatus["500_MESSAGE"]);
    }
  }

  async getAllCards(user_id){
    try {
      const sql = "SELECT * FROM cards WHERE user_id = ?";
      const [result] = await pool.query(sql, [user_id]);

      return result;
    } catch (exception) {
        console.log(exception.message);
        throw new MessageResponse(httpStatus.INTERNAL_SERVER_ERROR,httpStatus["500_MESSAGE"]);
    }
  }

}

export default card;
