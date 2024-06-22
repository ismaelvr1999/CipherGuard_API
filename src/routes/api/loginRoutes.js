import express from 'express';
import httpStatus from 'http-status';
import  loginControllers from '../../controllers/loginControllers'
const router = express.Router();

router.post('/login',loginControllers.login);

export default router;