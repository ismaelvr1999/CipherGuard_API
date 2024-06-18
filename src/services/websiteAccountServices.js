import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import websiteAccount from "../models/websiteAccount";

const addWebsiteAccount = async(websiteAccount)=>{
    const websiteAccountModel = new websiteAccount();

    const result = await websiteAccountModel.addWebsiteAccount(websiteAccount);

    return new MessageResponse(httpStatus.CREATED,httpStatus["201_MESSAGE"],
    {page_name:websiteAccount.page_name,
    email: websiteAccount.email,
    category: websiteAccount.category,
    commentary: websiteAccount.commentary})

}

export default {addWebsiteAccount}