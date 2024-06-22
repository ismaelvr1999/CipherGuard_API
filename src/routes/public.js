import express from 'express';
require('dotenv').config();
const router = express.Router();
import authMiddleware from '../middleware/authMiddleware';

import userRoutes from './api/userRoutes';
router.use(process.env.BASE_URL, userRoutes);

import websiteAccountRoutes from './api/websiteAccountRouter'
router.use(process.env.BASE_URL,websiteAccountRoutes);

import loginRoutes from './api/loginRoutes'
router.use(process.env.BASE_URL,loginRoutes)

export default router;