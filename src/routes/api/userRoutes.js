import express from 'express';
import httpStatus from 'http-status';
import  userControllers from '../../controllers/userControllers'
import authMiddleware from '../../middleware/authMiddleware';
import { checkSchema } from "express-validator";
import { signUpValidationSchema } from '../../validations/userValidation';
import handleValidationErrors from '../../middleware/handleValidationErrors';
const router = express.Router();

router.post('/user/sign-up',checkSchema(signUpValidationSchema),handleValidationErrors,userControllers.signUp);
router.get('/user',authMiddleware.authUser,userControllers.getUser);


export default router;