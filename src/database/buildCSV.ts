import * as fs from 'fs';
import * as path from 'path';
import * as fake from './fakeProduct';

const i = 8;


const num = i + 1;
const start = (i * 1000000) + 1
const end = start + 1000000;
const stream = fs.createWriteStream(path.resolve(__dirname, `../../../seed${num}.csv`));
stream.once('open', (fd) => {
  stream.write('id\tname\tminiDescription\tprice\tdealLen\tregPrice\treviewAvg\treviewCount\tbenefit\tsize\tcolor\tmattress\tlegs\tslattedBedBase\tikeaFamilySale\tonSale\tnew\tnotQuitePerfect\tavaliableForDelivery\tassembly\tsoldSeparate\n')
  for (let j = start; j < end; j += 1) {
    stream.write(`${j}\t${fake.product()}\n`)
  }
  stream.end();
});
