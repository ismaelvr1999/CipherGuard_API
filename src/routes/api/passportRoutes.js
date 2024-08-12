import express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import passportControllers from "../../controllers/passportControllers";


const router = express.Router();
router.use("/passports", authMiddleware.authUser);

router.get("/passports",passportControllers.getAllPassports);
router.get("/passports/total",passportControllers.getTotalPassportsByUser);
router.get("/passports/:passport_id",passportControllers.getPassport);
router.post("/passports",passportControllers.addPassport);
router.put("/passports/:passport_id",passportControllers.updatePassport)
router.delete("/passports/:passport_id",passportControllers.deletePassport);


export default router;