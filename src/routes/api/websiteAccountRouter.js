import express from 'express';
import httpStatus from 'http-status';
import websiteAccountControllers from "../../controllers/websiteAccountControllers"
const router = express.Router();

router.post('/website-account',websiteAccountControllers.addWebsiteAccount);



export default router;