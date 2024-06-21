import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import websiteAccount from "../models/websiteAccount";

const addWebsiteAccount = async(RequestBody)=>{
    const websiteAccountModel = new websiteAccount();

    const result = await websiteAccountModel.addWebsiteAccount(RequestBody);

    return new MessageResponse(httpStatus.CREATED,httpStatus["201_MESSAGE"],
    {page_name:RequestBody.page_name,
    email: RequestBody.email,
    category: RequestBody.category,
    commentary: RequestBody.commentary})

}

export default {addWebsiteAccount}