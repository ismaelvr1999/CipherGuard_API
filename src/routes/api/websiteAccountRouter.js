import express from 'express';
import httpStatus from 'http-status';
import websiteAccountControllers from "../../controllers/websiteAccountControllers"
import authMiddleware from '../../middleware/authMiddleware';
const router = express.Router();
router.use('/website-account',authMiddleware.authUser)


router.get("/website-account",websiteAccountControllers.getAllWebsiteAccounts)
router.get('/website-account/total',websiteAccountControllers.getTotalWebAccountsByUser);
router.get('/website-account/:page_id',websiteAccountControllers.getWebsiteAccount);

router.post('/website-account',websiteAccountControllers.addWebsiteAccount);
router.put("/website-account",websiteAccountControllers.updateWebAccount);







export default router;