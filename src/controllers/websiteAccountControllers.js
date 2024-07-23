import websiteAccountServices from "../services/websiteAccountServices";

const addWebsiteAccount = async (req, res) => {
  try {
    const {user_id} = req.user
    const result = await websiteAccountServices.addWebsiteAccount({user_id:user_id, ...req.body });
    return res.status(result.status).send(result);
  } catch (exception) {
    console.log(exception)
    return res.status(exception.status).send(exception);
  }
}

const getAllWebsiteAccounts = async (req, res) => {
  try {
    const {user_id} = req.user
    let result = null;
    if(req.query.search) result = await websiteAccountServices.searchWebAccount(req.query.search,user_id)
    else result = await websiteAccountServices.getAllWebsiteAccounts(user_id);
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

const getTotalWebAccountsByUser = async(req,res)=>{
  try {
    const {user_id} = req.user
    const result = await websiteAccountServices.getTotalWebAccountsByUser(user_id);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }

}

const updateWebAccount = async(req,res)=>{
  try {
    const {user_id} = req.user;
    const {page_id} = req.params;

    const websiteAccountUpdate ={
      page_id, 
      page_name: req.body.page_name,
      email: req.body.email,
      category: req.body.category,
      commentary: req.body.commentary,
      password: req.body.password,
      user_name: req.body.user_name
    };

    const result = await websiteAccountServices.updateWebAccount(websiteAccountUpdate,user_id);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }

}

const deleteWebAccount = async(req,res)=>{
  try {
    const {user_id} = req.user;
    const {page_id} = req.params;
    const result = await websiteAccountServices.deleteWebAccount(page_id,user_id);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status ).send(exception);
  }

}

export default {
  addWebsiteAccount,
  getAllWebsiteAccounts,
  getWebsiteAccount,
  getTotalWebAccountsByUser,
  updateWebAccount,
  deleteWebAccount
}
