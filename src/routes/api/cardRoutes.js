import express from 'express';
import authMiddleware from '../../middleware/authMiddleware';
import cardControllers from '../../controllers/cardControllers';

const router = express.Router();
router.use('/cards',authMiddleware.authUser);

router.get('/cards',cardControllers.getAllCards);
router.post('/cards',cardControllers.addCard);


export default router;

