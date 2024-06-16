import userServices from "../services/userServices";
const signUp = async (req, res) => {
  const newUser = { ...req.body };
  await userServices.signUp(newUser, (result) => {
    return res.status(result.status).send(result);
  });
};

export default { signUp };
