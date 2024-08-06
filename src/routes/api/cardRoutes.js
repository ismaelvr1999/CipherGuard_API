import express from 'express';
import authMiddleware from '../../middleware/authMiddleware';
import cardControllers from '../../controllers/cardControllers';

const router = express.Router();
router.use('/cards',authMiddleware.authUser);

router.get('/cards',cardControllers.getAllCards);
router.get('/cards/total',cardControllers.getTotalCardsByUser);
router.post('/cards',cardControllers.addCard);
router.put('/cards/:card_id',cardControllers.updateCard);
router.delete('/cards/:card_id',cardControllers.deleteCard);


export default router;

