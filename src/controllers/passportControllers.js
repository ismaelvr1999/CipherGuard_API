import passportServices from "../services/passportServices";
import MessageResponse from "../models/messageResponse";


const addPassport = async (req, res) => {
    try {
      const { user_id } = req.user;
      const passportRequest = {
        user_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        passport_number: req.body.passport_number,
        nationality: req.body.nationality,
        date_of_birth: req.body.date_of_birth || null,
        issue_date: req.body.issue_date,
        expiration_date: req.body.expiration_date,
        status: req.body.status,
        commentary: req.body.commentary || null
      };
  
      const result = await passportServices.addPassport(passportRequest);
      res.status(result.status).send(result)
    } catch (exception) {
      res.status(exception.status).send(exception);
    }
  };

  const getAllPassports = async (req, res) => {
    try {
      const { user_id } = req.user;
      let result = null;
      
      if(req.query.search) result = await passportServices.searchPassport(req.query.search,user_id);
      else result = await passportServices.getAllPassports(user_id);
      //const result = await passportServices.getAllPassports(user_id);
      res.status(result.status).send(result)
    } catch (exception) {
      res.status(exception.status).send(exception);
    }
  };

  const getPassport = async (req,res) =>{
    try {
      const {user_id} = req.user;
      const {passport_id} = req.params;
      const result = await passportServices.getPassport(passport_id,user_id);
      return res.status(result.status).send(result);
    } catch (exception) {
      return res.status(exception.status).send(exception);
    }
  };

  const getTotalPassportsByUser = async (req, res) => {
    try {
      const { user_id } = req.user;
      const result = await passportServices.getTotalPassportsByUser(user_id);
      res.status(result.status).send(result)
    } catch (exception) {
      res.status(exception.status).send(exception);
    }
  };

  const updatePassport = async (req, res) => {
    try {
      const {user_id} = req.user;
      const {passport_id} = req.params;
  
      const passportRequest = {
        passport_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        passport_number: req.body.passport_number,
        nationality: req.body.nationality,
        date_of_birth: req.body.date_of_birth || null,
        issue_date: req.body.issue_date,
        expiration_date: req.body.expiration_date,
        status: req.body.status,
        commentary: req.body.commentary || null
      };
      const result = await passportServices.updatePassport(passportRequest,user_id);
      res.status(result.status).send(result)
    } catch (exception) {
      res.status(exception.status).send(exception);
    }
  };

  const deletePassport = async(req,res) =>{
    try {
      const {user_id} = req.user;
      const {passport_id} = req.params;
      const result =  await passportServices.deletePassport(passport_id,user_id);
      res.status(result.status).send(result);
    } catch (exception) {
      res.status(exception.status).send(exception);
    }
  }
  
  export default {
    addPassport,
    getAllPassports,
    getPassport,
    getTotalPassportsByUser,
    updatePassport,
    deletePassport
  };