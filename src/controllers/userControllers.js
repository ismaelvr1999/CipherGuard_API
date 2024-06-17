import userServices from "../services/userServices";
const signUp = async (req, res) => {
  try {
    const newUser = { ...req.body };
    const result = await userServices.signUp(newUser);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
};

export default { signUp };
