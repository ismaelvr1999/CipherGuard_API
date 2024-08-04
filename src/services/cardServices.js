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

export default {
    addCard,
    getAllCards
}