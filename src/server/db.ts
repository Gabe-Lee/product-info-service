const mysql = require('mysql');
const ENV = require('./env');

const connection = mysql.createConnection({
  host: 'product-database.cdrcwxiifuzp.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: ENV.password,
  database: 'Products',
});

connection.connect(() => console.log('Connected to Database!'));

const updateOneProduct = (callback, id, newAvg, newTotal) => {
  connection.query(`UPDATE Products.info SET reviewAvg=${newAvg}, reviewCount=${newTotal} WHERE id = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectOneProduct = (callback, id) => {
  connection.query(`SELECT * FROM Products.info WHERE id = ${id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { selectOneProduct, updateOneProduct };
