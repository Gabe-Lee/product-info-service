"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var fake = require("./fakeProduct");
var i = 8;
var num = i + 1;
var start = (i * 1000000) + 1;
var end = start + 1000000;
var stream = fs.createWriteStream(path.resolve(__dirname, "../../../seed" + num + ".csv"));
stream.once('open', function (fd) {
    stream.write('id\tname\tminiDescription\tprice\tdealLen\tregPrice\treviewAvg\treviewCount\tbenefit\tsize\tcolor\tmattress\tlegs\tslattedBedBase\tikeaFamilySale\tonSale\tnew\tnotQuitePerfect\tavaliableForDelivery\tassembly\tsoldSeparate\n');
    for (var j = start; j < end; j += 1) {
        stream.write(j + "\t" + fake.product() + "\n");
    }
    stream.end();
});
//# sourceMappingURL=buildCSV.js.map