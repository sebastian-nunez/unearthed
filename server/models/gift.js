import { pool } from "../config/database.js";

class GiftModel {
  static async getAllGifts() {
    try {
      const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
      return results.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getGiftById(giftId) {
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM gifts
      WHERE id=$1
    `;

    try {
      const results = await pool.query(selectQuery, [giftId]);
      return results.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createGift(giftData) {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = giftData;

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

      return results.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateGift(giftId, giftData) {
    const {
      name,
      pricepoint,
      audience,
      image,
      description,
      submittedby,
      submittedon
    } = giftData;

    const updateQuery = `
      UPDATE gifts
      SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7
      WHERE id = $8;
    `;

    try {
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

      return results.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteGift(giftId) {
    const deleteQuery = `
      DELETE FROM gifts
      WHERE id = $1;
    `;

    try {
      const results = await pool.query(deleteQuery, [giftId]);
      return results.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default GiftModel;
