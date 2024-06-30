import express from 'express';
import verifyTokenControllers from '../../controllers/verifyTokenControllers';

const router = express.Router();

router.post('/verify-token',verifyTokenControllers.verifyToken);




export default router;