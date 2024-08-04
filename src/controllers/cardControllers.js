import cardServices from "../services/cardServices";

const addCard = async (req, res) => {
  try {
    const { user_id } = req.user;
    const cardRequest = {
      user_id,
      type: req.body.type,
      cardholder_name: req.body.cardholder_name,
      expiration_date: req.body.expiration_date,
      cvv: req.body.cvv,
      issuer: req.body.issuer,
      commentary: req.body.commentary || null,
    };

    const result = await cardServices.addCard(cardRequest);
    res.status(result.status).send(result)
  } catch (exception) {
    res.status(exception.status).send(exception);
  }
};

const getAllCards = async (req, res) => {
  try {
    const { user_id } = req.user;
    const result = await cardServices.getAllCards(user_id);
    res.status(result.status).send(result)
  } catch (exception) {
    res.status(exception.status).send(exception);
  }
};

export default {
    addCard,
    getAllCards
}
