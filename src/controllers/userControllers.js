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

const getUser = async (req, res) => {
  try {
    const id = req.user.email;
    const result = await userServices.getUser(id);
    return res.status(200).send(result);
  } catch (exception) {
    return res.status(400).send(exception.message);
  }
};

export default { signUp,getUser };
