import express from 'express';
import httpStatus from 'http-status';
import websiteAccountControllers from "../../controllers/websiteAccountControllers"
import authMiddleware from '../../middleware/authMiddleware';
import {addWebsiteAccountValidationSchema,updateWebAccountValidationSchema,deleteWebAccountValidationSchema} from "../../validations/websiteAccountValidation";
import {checkSchema} from "express-validator";
import handleValidationErrors from '../../middleware/handleValidationErrors';

const router = express.Router();
router.use('/website-account',authMiddleware.authUser)

router.get("/website-account",websiteAccountControllers.getAllWebsiteAccounts)
router.get('/website-account/total',websiteAccountControllers.getTotalWebAccountsByUser);

router.get('/website-account/:page_id',websiteAccountControllers.getWebsiteAccount);

router.post('/website-account',
    checkSchema(addWebsiteAccountValidationSchema),
    handleValidationErrors,
    websiteAccountControllers.addWebsiteAccount);

router.put("/website-account/:page_id",
    checkSchema(updateWebAccountValidationSchema),
    handleValidationErrors,
    websiteAccountControllers.updateWebAccount);

router.delete("/website-account/:page_id",
checkSchema(deleteWebAccountValidationSchema),
handleValidationErrors,
websiteAccountControllers.deleteWebAccount);







export default router;