import { DB } from './postgres';
import * as ENV from '../env';
import { Database } from './Interfaces';

const DATABASE = ENV.DB['PG'][ENV.MODE];
const pgClient = new pg.Client(DATABASE);

pgClient.connect(() => console.log('Connected to Database!'));

const db: Database = {
  getProduct: DB.getProduct,
  addReview: DB.addReview,
}

export { db };
