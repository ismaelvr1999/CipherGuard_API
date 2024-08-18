import userServices from "../services/userServices";
const signUp = async (req, res) => {
  try {
    const newUser = { 
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      master_password: req.body.master_password
    };
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
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception.message);
  }
};

export default { signUp,getUser};
