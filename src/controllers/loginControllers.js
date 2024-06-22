import loginServices from "../services/loginServices";

const login = async (req, res) => {
    try {
      const result = await loginServices.login(req.body);
      return res.status(result.status).send(result);
    } catch (exception) {
      return res.status(exception.status).send(exception);
    }
  }

  export default {login};
  