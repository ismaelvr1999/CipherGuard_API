import express from 'express';
require('dotenv').config();
const router = express.Router();

import userRoutes from './api/userRoutes';
router.use(process.env.BASE_URL, userRoutes);

import websiteAccountRoutes from './api/websiteAccountRouter'
router.use(process.env.BASE_URL, websiteAccountRoutes);

export default router;