import express from 'express';
import httpStatus from 'http-status';
import  userControllers from '../../controllers/userControllers'
import authMiddleware from '../../middleware/authMiddleware';
const router = express.Router();
router.use('/user',authMiddleware.authUser)
router.post('/user/sign-up',userControllers.signUp);
router.get('/user',userControllers.getUser);


export default router;