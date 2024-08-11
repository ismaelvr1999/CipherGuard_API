import httpStatus from "http-status";
import card from "../models/card";
import MessageResponse from "../models/messageResponse";


const addCard = async(cardRequest)=>{
    const cardModel = new card();
    await cardModel.addCard(cardRequest);
    return new MessageResponse(httpStatus.CREATED,httpStatus["201_MESSAGE"]);
}

const getAllCards = async(user_id)=>{
    const cardModel = new card();
    const result = await cardModel.getAllCards(user_id);
    return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result);
}

const getCard = async(card_id,user_id)=>{
  const cardModel = new card();
  const result = await cardModel.getCard(card_id,user_id);
  return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result[0]);
}

const getTotalCardsByUser = async(user_id)=>{
    const cardModel = new card();
    const result = await cardModel.getTotalCardsByUser(user_id);
    return new MessageResponse(httpStatus.OK,httpStatus["200_MESSAGE"],result[0]);
}

const updateCard = async (cardRequest, user_id) => {
    const cardModel = new card();
    const result = await cardModel.updateCard(
      cardRequest,
      user_id
    );
    if (result.affectedRows === 1) {
      return new MessageResponse(httpStatus.OK, result.info, {
        affectedRows: result["affectedRows"],
      });
    } else {
      throw new MessageResponse(httpStatus.BAD_REQUEST, result.info, {
        affectedRows: result["affectedRows"],
      });
    }
  };

  const deleteCard = async (card_id, user_id) => {
    const cardModel = new card();
    const result = await cardModel.deleteCard(card_id, user_id);
  
    if (result.affectedRows === 1) {
      return new MessageResponse(httpStatus.OK, httpStatus["200_MESSAGE"], {
        affectedRows: result["affectedRows"],
      });
    } else {
      throw new MessageResponse(httpStatus.BAD_REQUEST,httpStatus["400_MESSAGE"], {
        affectedRows: result["affectedRows"],
      });
    }
  };

  const searchCard = async (searchValue,user_id) => {
    const cardModel = new card();
    const result = await cardModel.searchCard(searchValue,user_id);
    const message = result.length === 0 ?"Results no found":httpStatus["200_MESSAGE"] ;
    return new MessageResponse(httpStatus.OK, message, result);
  };

export default {
    addCard,
    getAllCards,
    getTotalCardsByUser,
    updateCard,
    deleteCard,
    searchCard,
    getCard
}