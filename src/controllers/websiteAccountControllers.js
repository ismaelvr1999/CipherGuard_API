import websiteAccountServices from "../services/websiteAccountServices";

const addWebsiteAccount = async (req, res) => {
  try {
    const {user_id} = req.user
    const result = await websiteAccountServices.addWebsiteAccount({user_id:user_id, ...req.body });
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
}

const getAllWebsiteAccounts = async (req, res) => {
  try {
    const {user_id} = req.user
    const result = await websiteAccountServices.getAllWebsiteAccounts(user_id);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
}

const getWebsiteAccount = async (req, res) => {
  try {
    const {user_id} = req.user
    const result = await websiteAccountServices.getWebsiteAccount(req.params.page_id,user_id);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
}

export default {addWebsiteAccount,getAllWebsiteAccounts,getWebsiteAccount}
