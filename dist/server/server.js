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
app.get('/displayProduct/:id', function (req, res) {
    var id = req.params.id;
    db.selectOneProduct(function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            res.send(results);
        }
    }, Number(id));
});
app.patch('/updateReviewInfo', function (req, res) {
    var id = req.body.productId;
    var newAvg = req.body.newReviewAvg;
    var newTotal = req.body.newReviewCount;
    console.log(id);
    console.log(newAvg);
    console.log(newTotal);
    db.updateOneProduct(function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            res.send(results);
        }
    }, id, newAvg, newTotal);
});
app.listen(port, function () { return console.log("Listening on port " + port + "!"); });
//# sourceMappingURL=server.js.map