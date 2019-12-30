"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var ENV = require('./env');
var pgClient = new pg.Client({
    host: 'product-database.cdrcwxiifuzp.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: ENV.password,
    database: 'Products',
});
pgClient.connect(function () { return console.log('Connected to Database!'); });
var updateOneProduct = function (callback, id, newAvg, newTotal) {
    pgClient.query("UPDATE Products.info SET reviewAvg=" + newAvg + ", reviewCount=" + newTotal + " WHERE id = " + id, function (err, results) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};
exports.updateOneProduct = updateOneProduct;
var selectOneProduct = function (callback, id) {
    pgClient.query("SELECT * FROM Products.info WHERE id = " + id, function (err, results) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, results);
        }
    });
};
exports.selectOneProduct = selectOneProduct;
//# sourceMappingURL=db.js.map