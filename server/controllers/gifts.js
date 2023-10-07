import "../config/dotenv.js";
import Gift from "../models/gift.js"; // Importing the Gifts model

class GiftsController {
  static getGifts = async (req, res) => {
    try {
      const gifts = await Gift.getAllGifts(); // Using Gifts model to get all gifts
      res.status(200).json(gifts);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static getGiftById = async (req, res) => {
    try {
      const giftId = parseInt(req.params.giftId);
      const gift = await Gift.getGiftById(giftId); // Using Gifts model to get a gift by ID
      res.status(200).json(gift);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static createGift = async (req, res) => {
    const giftData = req.body;

    try {
      const createdGift = await Gift.createGift(giftData); // Using Gifts model to create a gift
      res.status(201).json(createdGift);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static updateGift = async (req, res) => {
    const giftData = req.body;

    try {
      const giftId = parseInt(req.params.giftId);
      const updatedGift = await Gift.updateGift(giftId, giftData); // Using Gifts model to update a gift
      res.status(200).json(updatedGift);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static deleteGift = async (req, res) => {
    try {
      const giftId = parseInt(req.params.giftId);
      const deletedGift = await Gift.deleteGift(giftId); // Using Gifts model to delete a gift
      res.status(200).json(deletedGift);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };
}

export default GiftsController;
