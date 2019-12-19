"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var fake = require("./fakeProduct");
var stream = fs.createWriteStream(path.resolve(__dirname, 'seed.csv'));
stream.once('open', function (fd) {
    for (var i = 0; i < 10000000; i += 1) {
        stream.write(fake.product() + "\n");
    }
    stream.end();
});
//# sourceMappingURL=buildCSV.js.map