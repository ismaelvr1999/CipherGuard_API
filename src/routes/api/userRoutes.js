import express from 'express';
import httpStatus from 'http-status';
import  userControllers from '../../controllers/userControllers'
import authMiddleware from '../../middleware/authMiddleware';
const router = express.Router();

router.post('/user/sign-up',userControllers.signUp);
router.get('/user',authMiddleware.authUser,userControllers.getUser);


export default router;