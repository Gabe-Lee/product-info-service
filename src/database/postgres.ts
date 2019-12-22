import * as pg from 'pg';
import * as ENV from '../env';
import { Database, Product } from './Interfaces';

const DATABASE = ENV.DB.PG[ENV.MODE];
const pgClient = new pg.Client(DATABASE);

const DB: Database = {
  async addReview(id: Number, newAvg: Number, newTotal: Number) {
    const result = await pgClient.query('UPDATE ', [id, newAvg, newTotal]);
    return result.rowCount;
  },
  async getProduct(id: Number) {
    const result = await pgClient.query('SELECT * FROM Products.info WHERE id = ?', [id]);
    return result.rows[0] as Product;
  }
}

pgClient.connect(() => console.log('Connected to Database!'));

export { DB };
