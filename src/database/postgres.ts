/* eslint-disable @typescript-eslint/camelcase */
import * as pg from 'pg';
import * as ENV from '../env';
import { Database, Product } from '../Interfaces';

const DATABASE = ENV.DB.PG.REMOTE;
const pgClient = new pg.Pool(DATABASE);

const db: Database = {
  // (GET) => /products/:id
  getProduct(id) {
    return pgClient.query(
      'SELECT * FROM products WHERE id = $1;',
      [id],
    ).then((result) => {
      const product = result.rows[0];
      if (product === undefined) {
        throw new RangeError(`Product with id ${id} not found`);
      }
      return product as Product;
    });
  },

  // (POST) -> /products
  addProduct(product) {
    const {
      name, mini_description, price, deal_len, reg_price, review_avg, review_count,
      description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
      on_sale, is_new, not_quite_perfect, available_for_delivery, assembly, sold_separate,
    } = product;
    return pgClient.query(
      `INSERT INTO products 
      (id, name, mini_description, price, deal_len, reg_price, review_avg, review_count,
      description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
      on_sale, new, not_quite_perfect, available_for_delivery, assembly, sold_separate)
      VALUES (DEFAULT, $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
      RETURNING id;`,
      [name, mini_description, price, deal_len, reg_price, review_avg, review_count,
        description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
        on_sale, is_new, not_quite_perfect, available_for_delivery, assembly, sold_separate],
    ).then((result) => {
      const newId = result.rows[0].id;
      if (newId === undefined) {
        throw new RangeError('Could not add product');
      }
      return newId;
    });
  },

  // (PUT) -> /products/:id
  replaceProduct(id, newProduct) {
    const {
      name, mini_description, price, deal_len, reg_price, review_avg, review_count,
      description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
      on_sale, is_new, not_quite_perfect, available_for_delivery, assembly, sold_separate,
    } = newProduct;
    return pgClient.query(
      `UPDATE products SET
      (name, mini_description, price, deal_len, reg_price, review_avg, review_count,
      description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
      on_sale, new, not_quite_perfect, available_for_delivery, assembly, sold_separate)
      = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
      WHERE id = $21;`,
      [name, mini_description, price, deal_len, reg_price, review_avg, review_count,
        description, size, color, mattress, legs, slatted_bed_base, ikea_family_sale,
        on_sale, is_new, not_quite_perfect, available_for_delivery, assembly, sold_separate, id],
    ).then((result) => {
      const { rowCount } = result;
      if (rowCount === 0) {
        throw new RangeError('Could not replace product');
      }
      return rowCount;
    });
  },

  // (DELETE) -> /products/:id
  deleteProduct(id) {
    return pgClient.query(
      'DELETE FROM products WHERE id = $1;',
      [id],
    ).then((result) => {
      const { rowCount } = result;
      if (rowCount === 0) {
        throw new RangeError('Could not find product to delete');
      }
      return rowCount;
    });
  },

  // (PATCH) => /products/:id/reviews
  addReview(id, newReview) {
    return pgClient.query(
      `UPDATE products SET 
      review_avg = ((review_avg*review_count)+$1)/(review_count+1), review_count = review_count+1
      WHERE id = $2
      RETURNING review_avg, review_count;`,
      [newReview, id],
    ).then((result) => {
      const { rowCount } = result;
      if (rowCount === 0) {
        throw new RangeError('Could not add review');
      }
      return result.rows[0];
    });
  },

  // (DELETE) -> /products/:id/reviews
  deleteReview(id, newReview) {
    return pgClient.query(
      `UPDATE products SET
      review_avg = ((review_avg*review_count)-$1)/(review_count-1), review_count = review_count-1
      WHERE id = $2
      RETURNING review_avg, review_count;`,
      [newReview, id],
    ).then((result) => {
      const { rowCount } = result;
      if (rowCount === 0) {
        throw new RangeError('Could not delete review');
      }
      return result.rows[0];
    });
  },

  // Pre-Test Transaction
  beginTest(savePoint = 'save') {
    return pgClient.query(`BEGIN; SAVEPOINT ${savePoint};`)
      .then((result) => result.rowCount);
  },

  // Post-Test Rollback
  endTest(savePoint = 'save') {
    return pgClient.query(`ROLLBACK TO ${savePoint}; COMMIT;`)
      .then((result) => result.rowCount);
  },
};

// pgClient.connect(() => console.log('Connected to Postgres DB!'));

export default db;
