"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Cors = require("cors");
var db_1 = require("../database/db");
var server = express();
var json = express.json();
var cors = Cors();
server.use(cors);
server.use(json);
server.use('/', express.static('public'));
server.use('/bundle', express.static('public/bundle.js'));
server.use('/style', express.static('public/style.css'));
// Products
server.get('/products/:id', function (req, res) {
    var id = req.params.id;
    console.log(typeof id);
    db_1.default.getProduct(Number(id))
        .then(function (product) {
        res.status(200).send(product);
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: Product Not Found');
    });
});
server.post('/products', function (req, res) {
    var product = req.body.product;
    db_1.default.addProduct(product)
        .then(function (insertCount) {
        if (insertCount) {
            res.status(200).end();
        }
        else {
            throw new Error();
        }
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: could not create new product');
    });
});
server.put('products/:id', function (req, res) {
    var id = Number(req.params.id);
    var newProduct = req.body.newProduct;
    db_1.default.replaceProduct(id, newProduct)
        .then(function (replaceCount) {
        if (replaceCount) {
            res.status(200).end();
        }
        else {
            throw new Error();
        }
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: could not replace product');
    });
});
server.delete('/products/:id', function (req, res) {
    var id = Number(req.params.id);
    db_1.default.deleteProduct(id)
        .then(function (deleteCount) {
        if (deleteCount) {
            res.status(200).end();
        }
        else {
            throw new Error();
        }
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: could not delete product');
    });
});
// Reviews
server.patch('products/:id/reviews', function (req, res) {
    var productId = req.params.productId;
    var id = Number(productId);
    var newReview = req.body.newReview;
    db_1.default.addReview(id, newReview)
        .then(function (updateCount) {
        if (updateCount) {
            res.status(200).end();
        }
        else {
            throw new Error();
        }
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: could not add review');
    });
});
server.delete('products/:id/reviews', function (req, res) {
    var productId = req.params.productId;
    var id = Number(productId);
    var oldReview = req.body.oldReview;
    db_1.default.addReview(id, oldReview)
        .then(function (updateCount) {
        if (updateCount) {
            res.status(200).end();
        }
        else {
            throw new Error();
        }
    })
        .catch(function (err) {
        console.error(err);
        res.status(500).send('Error: could not delete review');
    });
});
exports.default = server;
//# sourceMappingURL=server.js.map