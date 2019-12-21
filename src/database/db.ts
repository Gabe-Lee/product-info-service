import * as pg from 'pg';
import * as ENV from '../env';

const pgClient = new pg.Client(ENV.DB.PG);

pgClient.connect(() => console.log('Connected to Database!'));

const updateOneProduct = async(id: Number, newAvg: Number, newTotal: Number) => {
  return true;
};

const selectOneProduct = async(id: Number) => {
  const result = await pgClient.query(`SELECT * FROM Products.info WHERE id = ${id}`);
  console.log(result);
  return true;
};

export { selectOneProduct, updateOneProduct };
