"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var ENV = require("../env");
var DATABASE = ENV.DB.PG.REMOTE;
var pgClient = new pg.Pool(DATABASE);
var db = {
    // (GET) => /products/:id
    getProduct: function (id) {
        return pgClient.connect()
            .then(function (client) { return client.query('SELECT * FROM products WHERE id = $1;', [id]).then(function (result) {
            var product = result.rows[0];
            if (product === undefined) {
                throw new RangeError("Product with id " + id + " not found");
            }
            return product;
        }).finally(function () {
            client.release();
        }); });
    },
    // (POST) -> /products
    addProduct: function (product) {
        var name = product.name, minidescription = product.minidescription, price = product.price, deallen = product.deallen, regprice = product.regprice, reviewavg = product.reviewavg, reviewcount = product.reviewcount, benefit = product.benefit, size = product.size, color = product.color, mattress = product.mattress, legs = product.legs, slattedbedbase = product.slattedbedbase, ikeafamilysale = product.ikeafamilysale, onsale = product.onsale, isnew = product.new, notquiteperfect = product.notquiteperfect, avaliablefordelivery = product.avaliablefordelivery, assembly = product.assembly, soldseparate = product.soldseparate;
        return pgClient.query("INSERT INTO products \n      (id, name, minidescription, price, deallen, regprice, reviewavg, reviewcount,\n      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,\n      onsale, new, notquiteperfect, avaliablefordelivery, assembly, soldseparate)\n      VALUES (DEFAULT, $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)\n      RETURNING id;", [name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
            benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
            onsale, isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate]).then(function (result) {
            var newId = result.rows[0].id;
            if (newId === undefined) {
                throw new RangeError('Could not add product');
            }
            return newId;
        });
    },
    // (PUT) -> /products/:id
    replaceProduct: function (id, newProduct) {
        var name = newProduct.name, minidescription = newProduct.minidescription, price = newProduct.price, deallen = newProduct.deallen, regprice = newProduct.regprice, reviewavg = newProduct.reviewavg, reviewcount = newProduct.reviewcount, benefit = newProduct.benefit, size = newProduct.size, color = newProduct.color, mattress = newProduct.mattress, legs = newProduct.legs, slattedbedbase = newProduct.slattedbedbase, ikeafamilysale = newProduct.ikeafamilysale, onsale = newProduct.onsale, isnew = newProduct.new, notquiteperfect = newProduct.notquiteperfect, avaliablefordelivery = newProduct.avaliablefordelivery, assembly = newProduct.assembly, soldseparate = newProduct.soldseparate;
        return pgClient.query("UPDATE products SET\n      (name, minidescription, price, deallen, regprice, reviewavg, reviewcount,\n      benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,\n      onsale, new, notquiteperfect, avaliablefordelivery, assembly, soldseparate)\n      = ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)\n      WHERE id = $21;", [name, minidescription, price, deallen, regprice, reviewavg, reviewcount,
            benefit, size, color, mattress, legs, slattedbedbase, ikeafamilysale,
            onsale, isnew, notquiteperfect, avaliablefordelivery, assembly, soldseparate, id]).then(function (result) {
            var rowCount = result.rowCount;
            if (rowCount === 0) {
                throw new RangeError('Could not replace product');
            }
            return rowCount;
        });
    },
    // (DELETE) -> /products/:id
    deleteProduct: function (id) {
        return pgClient.query('DELETE FROM products WHERE id = $1;', [id]).then(function (result) {
            var rowCount = result.rowCount;
            if (rowCount === 0) {
                throw new RangeError('Could not find product to delete');
            }
            return rowCount;
        });
    },
    // (PATCH) => /products/:id/reviews
    addReview: function (id, newReview) {
        return pgClient.query("UPDATE products SET \n      reviewavg = ((reviewavg*reviewcount)+$1)/(reviewcount+1), reviewcount = reviewcount+1\n      WHERE id = $2\n      RETURNING reviewavg, reviewcount;", [newReview, id]).then(function (result) {
            var rowCount = result.rowCount;
            if (rowCount === 0) {
                throw new RangeError('Could not add review');
            }
            return result.rows[0];
        });
    },
    // (DELETE) -> /products/:id/reviews
    deleteReview: function (id, newReview) {
        return pgClient.query("UPDATE products SET\n      reviewAvg = ((reviewavg*reviewcount)-$1)/(reviewcount-1), reviewcount = reviewcount-1\n      WHERE id = $2\n      RETURNING reviewavg, reviewcount;", [newReview, id]).then(function (result) {
            var rowCount = result.rowCount;
            if (rowCount === 0) {
                throw new RangeError('Could not delete review');
            }
            return result.rows[0];
        });
    },
    // Pre-Test Transaction
    beginTest: function (savePoint) {
        if (savePoint === void 0) { savePoint = 'save'; }
        return pgClient.query("BEGIN; SAVEPOINT " + savePoint + ";")
            .then(function (result) { return result.rowCount; });
    },
    // Post-Test Rollback
    endTest: function (savePoint) {
        if (savePoint === void 0) { savePoint = 'save'; }
        return pgClient.query("ROLLBACK TO " + savePoint + "; COMMIT;")
            .then(function (result) { return result.rowCount; });
    },
};
// pgClient.connect(() => console.log('Connected to Postgres DB!'));
exports.default = db;
//# sourceMappingURL=postgres.js.map