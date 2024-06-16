import express from 'express';
require('dotenv').config();
const router = express.Router();

import userRoutes from './api/userRoutes';
router.use(process.env.BASE_URL, userRoutes);

export default router;