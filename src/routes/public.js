import express from 'express';
require('dotenv').config();
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware';

import userRoutes from './api/userRoutes';
router.use(process.env.BASE_URL, userRoutes);

import websiteAccountRoutes from './api/websiteAccountRouter';
router.use(process.env.BASE_URL,websiteAccountRoutes);

import loginRoutes from './api/loginRoutes';
router.use(process.env.BASE_URL,loginRoutes);

import verifyTokenRoutes from './api/verifyTokenRoutes';
router.use(process.env.BASE_URL,verifyTokenRoutes);

import cardRoutes from './api/cardRoutes';
router.use(process.env.BASE_URL,cardRoutes);


export default router;