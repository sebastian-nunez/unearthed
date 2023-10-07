import express from "express";
import GiftsController from "../controllers/gifts.js";

const router = express.Router();

router.get("/", GiftsController.getGifts);
router.post("/", GiftsController.createGift);
router.get("/:giftId", GiftsController.getGiftById);
router.patch("/:giftId", GiftsController.updateGift);
router.delete("/:giftId", GiftsController.deleteGift);

export default router;
