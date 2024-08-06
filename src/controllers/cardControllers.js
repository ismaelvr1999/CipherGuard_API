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
    let result = null;
    
    if(req.query.search) result = await cardServices.searchCard(req.query.search,user_id);
    else result = await cardServices.getAllCards(user_id);

    res.status(result.status).send(result)
  } catch (exception) {
    res.status(exception.status).send(exception);
  }
};

const getTotalCardsByUser = async (req, res) => {
  try {
    const { user_id } = req.user;
    const result = await cardServices.getTotalCardsByUser(user_id);
    res.status(result.status).send(result)
  } catch (exception) {
    res.status(exception.status).send(exception);
  }
};

const updateCard = async (req, res) => {
  try {
    const {user_id} = req.user;
    const {card_id} = req.params;

    const cardRequest ={
      card_id, 
      type: req.body.type,
      cardholder_name: req.body.cardholder_name,
      expiration_date: req.body.expiration_date,
      cvv: req.body.cvv,
      issuer: req.body.issuer,
      commentary: req.body.commentary
    };
    const result = await cardServices.updateCard(cardRequest,user_id);
    res.status(result.status).send(result)
  } catch (exception) {
    res.status(exception.status).send(exception);
  }
};

const deleteCard = async(req,res) =>{
  try {
    const {user_id} = req.user;
    const {card_id} = req.params;
    const result =  await cardServices.deleteCard(card_id,user_id);
    res.status(result.status).send(result);
  } catch (exception) {
    res.status(exception.status).send(exception);
  }

}

export default {
    addCard,
    getAllCards,
    getTotalCardsByUser,
    updateCard,
    deleteCard
}
