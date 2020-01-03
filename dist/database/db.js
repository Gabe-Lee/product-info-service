"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postgres_1 = require("./postgres"); // Change to reference chosen database service
var utils_1 = require("./utils");
// Database Access
var database = {
    // (GET) => /products/:id
    getProduct: function (id) {
        return utils_1.verifyId(id)
            .then(function () { return postgres_1.default.getProduct(id); });
    },
    // (POST) -> /products
    addProduct: function (product) {
        return utils_1.verifyProduct(product)
            .then(function () { return postgres_1.default.addProduct(product); });
    },
    // (PUT) -> /products/:id
    replaceProduct: function (id, newProduct) {
        return utils_1.verifyId(id)
            .then(function () { return utils_1.verifyProduct(newProduct); })
            .then(function () { return postgres_1.default.replaceProduct(id, newProduct); });
    },
    // (DELETE) -> /products/:id
    deleteProduct: function (id) {
        return utils_1.verifyId(id)
            .then(function () { return postgres_1.default.deleteProduct(id); });
    },
    // (PATCH) => /products/:id/reviews
    addReview: function (id, newReview) {
        return utils_1.verifyId(id)
            .then(function () { return utils_1.verifyReview(newReview); })
            .then(function () { return postgres_1.default.addReview(id, newReview); });
    },
    // (DELETE) -> /products/:id/reviews
    deleteReview: function (id, oldReview) {
        return utils_1.verifyId(id)
            .then(function () { return utils_1.verifyReview(oldReview); })
            .then(function () { return postgres_1.default.deleteReview(id, oldReview); });
    },
    beginTest: function (savePoint) {
        if (savePoint === void 0) { savePoint = 'save'; }
        return postgres_1.default.beginTest(savePoint);
    },
    endTest: function (savePoint) {
        if (savePoint === void 0) { savePoint = 'save'; }
        return postgres_1.default.endTest(savePoint);
    },
};
exports.default = database;
//# sourceMappingURL=db.js.map