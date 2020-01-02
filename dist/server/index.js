"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var ENV = require("../env");
var PORT = ENV.SERVER[ENV.MODE].PORT;
server_1.default.listen(PORT, function () {
    console.log("Listening on port " + PORT + "...");
});
//# sourceMappingURL=index.js.map