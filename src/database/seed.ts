const pgClient = require('pg').Client;
const path = require('path');
const fakeProduct = require('./fakeProduct');

const pg = new pgClient({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  port: 5423,
});

(async() => {
  try {
    await pg.connect();
  }
  catch(err) {
    console.log(err);
  }
  pg.query(`\\i ${path.resolve(__dirname, 'schema.sql')}`);
})();

// for (let i = 0; i < 1000; i += 1) {

// }
