import { pool } from "../config/database.js";
import "../config/dotenv.js";

class GiftsController {
  static getGifts = async (req, res) => {
    try {
      const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
      res.status(200).json(results.rows);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static getGiftById = async (req, res) => {
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM gifts
      WHERE id=$1
    `;

    try {
      const giftId = parseInt(req.params.giftId);

      const results = await pool.query(selectQuery, [giftId]);
      res.status(200).json(results.rows[0]);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static createGift = async (req, res) => {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = req.body;

    const createQuery = `
      INSERT INTO gifts (name, pricepoint, audience, image, description, submittedby, submittedon)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    try {
      const results = await pool.query(createQuery, [
        name,
        pricepoint,
        audience,
        image,
        description,
        submittedby,
        submittedon
      ]);

      res.status(201).json(results.rows[0]);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static updateGift = async (req, res) => {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = req.body;

    const updateQuery = `
      UPDATE gifts
      SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7
      WHERE id = $8;
    `;

    try {
      // converting string to integer could fail
      const giftId = parseInt(req.params.giftId);

      const results = await pool.query(updateQuery, [
        name,
        pricepoint,
        audience,
        image,
        description,
        submittedby,
        submittedon,
        giftId
      ]);

      res.status(200).json(results.rows[0]);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };

  static deleteGift = async (req, res) => {
    const deleteQuery = `
      DELETE FROM gifts
      WHERE id = $1;
    `;

    try {
      const giftId = parseInt(req.params.giftId);

      const results = await pool.query(deleteQuery, [giftId]);
      res.status(200).json(results.rows[0]);
    } catch (error) {
      res.status(409).json({ error: error.message });
    }
  };
}

export default GiftsController;
