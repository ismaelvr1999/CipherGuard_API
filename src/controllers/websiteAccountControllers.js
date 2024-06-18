import websiteAccountServices from "../services/websiteAccountServices";

const addWebsiteAccount = async (req, res) => {
  try {
    const result = websiteAccountServices.addWebsiteAccount({ ...req.body });
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
};

export default {addWebsiteAccount}
