"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require('faker');
var postgres = require('pg');
var mongo = require('mongodb').MongoClient;
var productName = function () {
    return faker.random.boolean() ? faker.name.firstName() : faker.name.lastName();
};
var miniDescription = function () {
    return faker.fake("{{commerce.productName}}" + (faker.random.boolean() ? ", " + faker.commerce.color() : ''));
};
var price = function () {
    return faker.commerce.price();
};
var dealLen = function () {
    return "Deal only lasts until " + faker.date.future();
};
var regPrice = function () {
    return faker.commerce.price();
};
var reviewAvg = function () {
    return (Math.random() * 5).toFixed(1);
};
var reviewCount = function () { return faker.random.number().toString(); };
var description = function () { return faker.lorem.paragraph(); };
var size = function () { return ~~(Math.random() * 144) + "in x " + ~~(Math.random() * 144) + "in x " + ~~(Math.random() * 144) + "in"; };
var color = function () { return faker.commerce.color(); };
var mattress = function () { return "Queen,King,Twin"; };
var legs = function () { return (~~(Math.random() * 6)).toString(); };
var bedBase = function () { return faker.commerce.productMaterial(); };
var bool = function () { return faker.random.boolean().toString(); };
var product = function () {
    var product = '';
    product += productName() + "\t";
    product += miniDescription() + "\t";
    product += price() + "\t";
    product += dealLen() + "\t";
    product += regPrice() + "\t";
    product += reviewAvg() + "\t";
    product += reviewCount() + "\t";
    product += description() + "\t";
    product += size() + "\t";
    product += color() + "\t";
    product += mattress() + "\t";
    product += legs() + "\t";
    product += bedBase() + "\t";
    product += bool() + "\t";
    product += bool() + "\t";
    product += bool() + "\t";
    product += bool() + "\t";
    product += bool() + "\t";
    product += bool() + "\t";
    product += "" + bool();
    return product;
};
exports.product = product;
//# sourceMappingURL=fakeProduct.js.map