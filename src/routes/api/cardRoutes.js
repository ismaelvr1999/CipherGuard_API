import express from "express";
import authMiddleware from "../../middleware/authMiddleware";
import cardControllers from "../../controllers/cardControllers";
import { checkSchema } from "express-validator";
import {
  addcardValidationSchema,
  updateCardValidationSchema,
  deleteCardValidationSchema,
} from "../../validations/cardValidation";
import handleValidationErrors from "../../middleware/handleValidationErrors";

const router = express.Router();
router.use("/cards", authMiddleware.authUser);

router.get("/cards", cardControllers.getAllCards);
router.get("/cards/total", cardControllers.getTotalCardsByUser);
router.get("/cards/:card_id",cardControllers.getCard);

router.post(
  "/cards",
  checkSchema(addcardValidationSchema),
  handleValidationErrors,
  cardControllers.addCard
);
router.put(
  "/cards/:card_id",
  checkSchema(updateCardValidationSchema),
  handleValidationErrors,
  cardControllers.updateCard
);
router.delete(
  "/cards/:card_id",
  checkSchema(deleteCardValidationSchema),
  handleValidationErrors,
  cardControllers.deleteCard
);

export default router;
