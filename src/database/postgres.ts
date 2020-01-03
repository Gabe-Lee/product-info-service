import * as pg from 'pg';
import * as ENV from '../env';
import { Database, Product } from '../Interfaces';

const DATABASE = ENV.DB.PG.REMOTE;
const pgClient = new pg.Pool(DATABASE);

const db: Database = {
  // (GET) => /products/:id
  getProduct(id) {
    return pgClient.connect()
      .then((client) => client.query(
        'SELECT * FROM products WHERE id = $1;',
        [id],
      ).then((result) => {
        const product = result.rows[0];
        if (product === undefined) {
          throw new RangeError(`Product with id ${id} not found`);
        }
        return product as Product;
      }).finally(() => {
        client.release();
      }));
  },

  // (POST) -> /products
  addProduct(product) {
    const {
      name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
      onsale, new: isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate,
    } = product;
    return pgClient.query(
      `INSERT INTO products 
      (id, name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
      onsale, new, notquiteperfect, avaliablefordelivery, assembly, soldseparate)
      VALUES (DEFAULT, $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
      RETURNING id;`,
      [name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
        benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
        onsale, isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate],
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
      name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
      onsale, new: isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate,
    } = newProduct;
    return pgClient.query(
      `UPDATE products SET
      (name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
      onsale, new, notquiteperfect, avaliablefordelivery, assembly, soldseparate)
      = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)
      WHERE id = $21;`,
      [name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
        benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
        onsale, isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate, id],
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
      reviewavg = ((reviewavg*reviewcount)+$1)/(reviewcount+1), reviewcount = reviewcount+1
      WHERE id = $2
      RETURNING reviewavg, reviewcount;`,
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
      reviewAvg = ((reviewavg*reviewcount)-$1)/(reviewcount-1), reviewcount = reviewcount-1
      WHERE id = $2
      RETURNING reviewavg, reviewcount;`,
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
