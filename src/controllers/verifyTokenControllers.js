import verifyTokenServices from "../services/verifyTokenServices";

const verifyToken = (req, res) => {
  try {
    const token = req.headers.authorization;
    const result = verifyTokenServices.verifyToken(token);
    return res.status(result.status).send(result);
  } catch (exception) {
    return res.status(exception.status).send(exception);
  }
};

export default {verifyToken}