import * as pg from 'pg';
const ENV = require('./env');

const pgClient = new pg.Client({
  host: 'product-database.cdrcwxiifuzp.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: ENV.password,
  database: 'Products',
});

pgClient.connect(() => console.log('Connected to Database!'));

const updateOneProduct = (callback: Function, id: Number, newAvg: Number, newTotal: Number) => {
  pgClient.query(`UPDATE Products.info SET reviewAvg=${newAvg}, reviewCount=${newTotal} WHERE id = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectOneProduct = (callback: Function, id: Number) => {
  pgClient.query(`SELECT * FROM Products.info WHERE id = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

export { selectOneProduct, updateOneProduct };
