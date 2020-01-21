/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-var-requires */
const db = require('../dist/database/db').default;
const { TProduct } = require('../dist/Interfaces');

const validProduct = {
  name: 'thing',
  mini_description: 'its a valid thing',
  price: 777.99,
  deal_len: 'forever',
  reg_price: '999.99',
  review_avg: 5,
  review_count: 4,
  description: 'Sometimes you just want to buy a valid thing. You should buy this valid thing.',
  size: 'big',
  color: 'green',
  mattress: 'extra',
  legs: '10',
  slatted_bed_base: 'diamond',
  ikea_family_sale: true,
  on_sale: true,
  is_new: true,
  not_quite_perfect: true,
  available_for_delivery: true,
  assembly: true,
  sold_separate: 'true',
};
const partialProduct = {
  name: 'Wooden Horse',
  mini_description: 'conquer your enemies with this secret gift.',
  price: 3000,
};
const invalidProduct = {
  name: undefined,
  mini_description: { title: 'this is not good' },
  price: '777.99',
  deal_len: Date.now(),
  reg_price: 1000000,
  review_avg: -10,
  review_count: -1,
  description: false,
  size: 42,
  color: {},
  mattress: 'extra',
  legs: 5,
  slatted_bed_base: 69,
  ikea_family_sale: null,
  on_sale: null,
  is_new: null,
  not_quite_perfect: null,
  available_for_delivery: null,
  assembly: null,
  sold_separate: false,
};
const veryInvalidProduct = {
  eyes: 9001,
  smell: 'yuck',
  age: Number.MAX_SAFE_INTEGER,
};
const cardboardProduct = 'TotalyLegitProduct (NOT CARDBOARD!)';

describe('Database', () => {
  // Test Sandboxing
  // beforeAll(() => db.beginTest());
  // afterAll(() => db.endTest());

  // (GET) => /products/:id
  describe('getProduct() (GET -> /products/:id)', () => {
    test('it should return a product with proper field types if given valid id', () => db.getProduct(1)
      .then((product) => {
        const keys = Object.keys(product);
        for (let i = 0; i < keys.length; i += 1) {
          expect(typeof product[keys[i]]).toEqual(TProduct[keys[i]]);
        }
      }));
    test('it should throw a RangeError when given invalid integer id', () => db.getProduct(-20).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given non-number id', () => db.getProduct('what?').catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given float id', () => db.getProduct(3.1415).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
  });

  // (POST) -> /products
  describe('addProduct() (POST -> /products)', () => {
    test('it should return a is_new product id when given a valid product', () => db.addProduct(validProduct).then((id) => {
      expect(Number.isInteger(id)).toBe(true);
    }));
    test('it should throw a TypeError when given product with only partial fields', () => db.addProduct(partialProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given product with valid properties but invalid values', () => db.addProduct(invalidProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given completely invalid product object', () => db.addProduct(veryInvalidProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given non-object variable', () => db.addProduct(cardboardProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
  });

  // (PUT) -> /products/:id
  describe('replaceProduct() (PUT -> /products/:id)', () => {
    test('it should return a row count of 1 when given a valid product', () => db.replaceProduct(1, validProduct).then((rowCount) => {
      expect(rowCount).toBe(1);
    }));
    test('it should throw a RangeError when given invalid integer id', () => db.replaceProduct(-20, validProduct).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given non-number id', () => db.replaceProduct('what?', validProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given float id', () => db.replaceProduct(3.1415, validProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given product with only partial fields', () => db.replaceProduct(1, partialProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given product with valid properties but invalid values', () => db.replaceProduct(1, invalidProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given completely invalid product object', () => db.replaceProduct(1, veryInvalidProduct).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given non-object variable', () => db
      .replaceProduct(9, cardboardProduct)
      .catch((err) => {
        expect(err).toEqual(expect.any(TypeError));
      }));
  });

  // (DELETE) -> /products/:id
  describe('deleteProduct() (DELETE -> /products/:id)', () => {
    test('it should delete product when given valid id', () => db
      .deleteProduct(2)
      .then(() => db.getProduct(2))
      .catch((err) => {
        expect(err).toEqual(expect.any(RangeError));
      }));
    test('it should throw a RangeError when given invalid integer id', () => db.deleteProduct(-20).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given non-number id', () => db.deleteProduct('what?').catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given float id', () => db.deleteProduct(3.1415).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
  });

  // (PATCH) => /products/:id/reviews
  describe('addReview() (PATCH => /products/:id/reviews)', () => {
    test('it should return the is_new review average and count when given valid id and rating', () => db
      .addProduct(validProduct)
      .then((id) => db.addReview(id, 0))
      .then(({ review_avg, review_count }) => {
        const vp = validProduct;
        const expectedCount = vp.review_count + 1;
        const expectedAvg = (vp.review_avg * vp.review_count + 0) / expectedCount;
        expect(review_avg).toBe(expectedAvg);
        expect(review_count).toBe(expectedCount);
      }));
    test('it should throw a RangeError when given invalid integer id', () => db.addReview(-20, 5).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given non-number id', () => db.addReview('what?', 5).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given float id', () => db.addReview(3.1415, 5).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a RangeError when given a rating below 0', () => db.addReview(1, -1).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a RangeError when given when given a rating above 10', () => db.addReview(1, 10).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given a non-number rating', () => db.addReview(1, 'Very Good').catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
  });

  // (DELETE) -> /products/:id/reviews
  describe('deleteReview() (DELETE => /products/:id/reviews)', () => {
    test('it should return the is_new review average and count when given valid id and rating', () => db
      .addProduct(validProduct)
      .then((id) => db.deleteReview(id, 5))
      .then(({ review_avg, review_count }) => {
        const vp = validProduct;
        const expectedCount = vp.review_count - 1;
        const expectedAvg = (vp.review_avg * vp.review_count - 5) / expectedCount;
        expect(review_avg).toBe(expectedAvg);
        expect(review_count).toBe(expectedCount);
      }));
    test('it should throw a RangeError when given invalid integer id', () => db.deleteReview(-20, 5).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given non-number id', () => db.deleteReview('what?', 5).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a TypeError when given float id', () => db.deleteReview(3.1415, 5).catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
    test('it should throw a RangeError when given a rating below 0', () => db.deleteReview(1, -1).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a RangeError when given when given a rating above 10', () => db.deleteReview(1, 10).catch((err) => {
      expect(err).toEqual(expect.any(RangeError));
    }));
    test('it should throw a TypeError when given a non-number rating', () => db.deleteReview(1, 'Very Good').catch((err) => {
      expect(err).toEqual(expect.any(TypeError));
    }));
  });
});
