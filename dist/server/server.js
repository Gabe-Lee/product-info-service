"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var app = express();
var port = 3030;
var db = require("../database/db");
app.use(cors());
app.use(express.json());
app.use('/', express.static('public'));
app.use('/bundle', express.static('public/bundle.js'));
app.use('/styleSheet', express.static('public/style.css'));
app.get('/products/:id', function (req, res) {
    var id = req.params.id;
    console.log(typeof id);
    db.selectOneProduct(Number(id))
        .then(function (product) {
        res.status(200).send(product);
    })
        .catch(function (err) {
        res.status(500).send('Error: Product Not Found');
    });
});
app.patch('/updateReviewInfo', function (req, res) {
    var _a = req.body, productId = _a.productId, newReviewAvg = _a.newReviewAvg, newReviewCount = _a.newReviewCount;
    db.updateOneProduct(productId, newReviewAvg, newReviewCount)
        .then(function (result) {
        res.status(200).send();
    })
        .catch(function (err) {
        res.status(500).send('Error: Product Not Found');
    });
});
app.listen(port, function () { return console.log("Listening on port " + port + "!"); });
//# sourceMappingURL=server.js.map