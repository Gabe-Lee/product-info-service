var mysql = require('mysql');
var ENV = require('./env');
var connection = mysql.createConnection({
    host: 'product-database.cdrcwxiifuzp.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: ENV.password,
    database: 'Products',
});
connection.connect(function () { return console.log('Connected to Database!'); });
var updateOneProduct = function (callback, id, newAvg, newTotal) {
    connection.query("UPDATE Products.info SET reviewAvg=" + newAvg + ", reviewCount=" + newTotal + " WHERE id = " + id, function (err, results) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};
var selectOneProduct = function (callback, id) {
    connection.query("SELECT * FROM Products.info WHERE id = " + id, function (err, results) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};
module.exports = { selectOneProduct: selectOneProduct, updateOneProduct: updateOneProduct };
//# sourceMappingURL=db.js.map