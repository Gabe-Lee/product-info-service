import * as fs from 'fs';
import * as path from 'path';
import * as fake from './fakeProduct';

const stream = fs.createWriteStream(path.resolve(__dirname, 'seed.csv'));
stream.once('open', (fd) => {
  for (let i = 0; i < 10000000; i += 1) {
    stream.write(`${fake.product()}\n`)
  }
  stream.end();
})