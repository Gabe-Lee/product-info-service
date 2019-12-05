const mysql = require('mysql');
const password = require('./password.js');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'Products'
});

connection.connect(() => console.log('Connected to Database!'));

let selectAllProducts = (callback) => {
    connection.query('SELECT * FROM Products.info', (err, results) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, results)
        }
    });
};

let selectOneProduct = (callback, id) => {
    connection.query(`SELECT * FROM Products.info WHERE id = ${id}`, (err, results) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, results)
        }
    })
};

module.exports = {selectOneProduct, selectAllProducts};

