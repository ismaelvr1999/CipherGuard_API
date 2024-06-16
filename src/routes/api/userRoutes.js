import express from 'express';
import httpStatus from 'http-status';
import  userControllers from '../../controllers/userControllers'
const router = express.Router();

router.post('/user',userControllers.signUp);


export default router;