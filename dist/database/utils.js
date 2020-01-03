"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable valid-typeof */
var Interfaces_1 = require("../Interfaces");
// Client Data Validation
var verifyId = function (id) { return (Number.isInteger(id) ? Promise.resolve(id) : Promise.reject(new TypeError("Invalid product ID: " + id + " is not an integer"))); };
exports.verifyId = verifyId;
var verifyReview = function (review) {
    if (typeof review !== 'number')
        return Promise.reject(new TypeError("Invalid review type: " + review + " is not a number"));
    if (!(review >= 0 && review <= 5))
        return Promise.reject(new RangeError("Invalid review value: " + review + " is not between 0 and 5 inclusive"));
    return Promise.resolve(review);
};
exports.verifyReview = verifyReview;
var verifyProduct = function (product) {
    var keys = Object.keys(Interfaces_1.TProduct);
    for (var i = 0; i < keys.length; i += 1) {
        if (typeof product[keys[i]] !== Interfaces_1.TProduct[keys[i]] && keys[i] !== 'id') {
            return Promise.reject(new TypeError("Invalid product format: On property " + keys[i] + ", expected type " + Interfaces_1.TProduct[keys[i]] + " but got type " + typeof product[keys[i]]));
        }
    }
    return Promise.resolve(product);
};
exports.verifyProduct = verifyProduct;
//# sourceMappingURL=utils.js.map