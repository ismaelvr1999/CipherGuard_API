import express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import passportControllers from "../../controllers/passportControllers";
import { checkSchema } from "express-validator";
import {
  addPassportValidationSchema,
  deletePassportValidationSchema,
  updatePassportValidationSchema,
} from "../../validations/passportValidation";
import handleValidationErrors from "../../middleware/handleValidationErrors";

const router = express.Router();
router.use("/passports", authMiddleware.authUser);

router.get("/passports", passportControllers.getAllPassports);
router.get("/passports/total", passportControllers.getTotalPassportsByUser);
router.get("/passports/:passport_id", passportControllers.getPassport);
router.post(
  "/passports",
  checkSchema(addPassportValidationSchema),
  handleValidationErrors,
  passportControllers.addPassport
);
router.put(
  "/passports/:passport_id",
  checkSchema(updatePassportValidationSchema),
  handleValidationErrors,
  passportControllers.updatePassport
);
router.delete(
  "/passports/:passport_id",
  checkSchema(deletePassportValidationSchema),
  handleValidationErrors,
  passportControllers.deletePassport
);

export default router;
