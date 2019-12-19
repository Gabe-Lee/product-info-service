const faker = require('faker');
const postgres = require('pg');
const mongo = require('mongodb').MongoClient;

const productName = (): String => {
  return faker.random.boolean() ? faker.name.firstName() : faker.name.lastName();
}

const miniDescription = (): String => {
  return faker.fake(`{{commerce.productName}}${faker.random.boolean() ? `, ${faker.commerce.color()}` : ''}`);
}

const price = (): String => {
  return faker.commerce.price();
}

const dealLen = (): String => {
  return `Deal only lasts until ${faker.date.future()}`
}

const regPrice = (): String => {
  return faker.commerce.price();
}

const reviewAvg = (): String => {
  return (Math.random() * 5).toFixed(1);
}

const reviewCount = (): String => faker.random.number().toString();


const description = ():String => faker.lorem.paragraph();


const size = ():String => `${~~(Math.random() * 144)}in x ${~~(Math.random() * 144)}in x ${~~(Math.random() * 144)}in`;

const color = ():String => faker.commerce.color();

const mattress = ():String => `Queen,King,Twin`;

const legs = ():String => (~~(Math.random() * 6)).toString();

const bedBase = ():String => faker.commerce.productMaterial();

const bool = ():String => faker.random.boolean().toString();

const product = ():String => {
  let product = '';
  product += `${productName()}\t`;
  product += `${miniDescription()}\t`;
  product += `${price()}\t`;
  product += `${dealLen()}\t`;
  product += `${regPrice()}\t`;
  product += `${reviewAvg()}\t`;
  product += `${reviewCount()}\t`;
  product += `${description()}\t`;
  product += `${size()}\t`;
  product += `${color()}\t`;
  product += `${mattress()}\t`;
  product += `${legs()}\t`;
  product += `${bedBase()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}\t`;
  product += `${bool()}`;
  return product;
}

export { product };
