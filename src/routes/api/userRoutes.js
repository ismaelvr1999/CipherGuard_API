import express from 'express';
import httpStatus from 'http-status';
import  userControllers from '../../controllers/userControllers'
const router = express.Router();

router.post('/user/sign-up',userControllers.signUp);
router.get('/user/:userid',userControllers.getUser);


export default router;