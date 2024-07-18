import MessageResponse from "../models/messageResponse";
import httpStatus from "http-status";
import websiteAccount from "../models/websiteAccount";

const addWebsiteAccount = async (RequestBody) => {
  const websiteAccountModel = new websiteAccount();

  const result = await websiteAccountModel.addWebsiteAccount(RequestBody);

  return new MessageResponse(httpStatus.CREATED, httpStatus["201_MESSAGE"], {
    page_name: RequestBody.page_name,
    email: RequestBody.email,
    category: RequestBody.category,
    commentary: RequestBody.commentary,
  });
};

const getAllWebsiteAccounts = async (user_id) => {
  const websiteAccountModel = new websiteAccount();

  const result = await websiteAccountModel.getAllWebsiteAccounts(user_id);
  return new MessageResponse(httpStatus.OK, httpStatus["200_MESSAGE"], result);
};

const getWebsiteAccount = async (page_id, user_id) => {
  const websiteAccountModel = new websiteAccount();
  const result = await websiteAccountModel.getWebsiteAccount(page_id, user_id);
  return new MessageResponse(
    httpStatus.OK,
    httpStatus["200_MESSAGE"],
    result[0]
  );
};

const getTotalWebAccountsByUser = async (user_id) => {
  const websiteAccountModel = new websiteAccount();
  const total = await websiteAccountModel.getTotalWebAccountsByUser(user_id);
  return new MessageResponse(
    httpStatus.OK,
    httpStatus["200_MESSAGE"],
    total[0]
  );
};

const updateWebAccount = async (websiteAccountRequest, user_id) => {
  const websiteAccountModel = new websiteAccount();
  const result = await websiteAccountModel.updateWebAccount(
    websiteAccountRequest,
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

const deleteWebAccount = async (page_id, user_id) => {
  const websiteAccountModel = new websiteAccount();
  const result = await websiteAccountModel.deleteWebAccount(page_id, user_id);

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
export default {
  addWebsiteAccount,
  getAllWebsiteAccounts,
  getWebsiteAccount,
  getTotalWebAccountsByUser,
  updateWebAccount,
  deleteWebAccount,
};
