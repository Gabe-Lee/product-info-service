/* eslint-disable valid-typeof */
import { Product, TProduct } from '../Interfaces';

// Client Data Validation
const verifyId: (id: number) => Promise<number> = (id) => (Number.isInteger(id) ? Promise.resolve(id) : Promise.reject(new TypeError(`Invalid product ID: ${id} is not an integer`)));

const verifyReview: (review: number) => Promise<number> = (review) => {
  if (typeof review !== 'number') return Promise.reject(new TypeError(`Invalid review type: ${review} is not a number`));
  if (!(review >= 0 && review <= 5)) return Promise.reject(new RangeError(`Invalid review value: ${review} is not between 0 and 5 inclusive`));
  return Promise.resolve(review);
};

const verifyProduct: (product: Product) => Promise<Product> = (product) => {
  const keys = Object.keys(TProduct);
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof product[keys[i]] !== TProduct[keys[i]] && keys[i] !== 'id') {
      return Promise.reject(new TypeError(`Invalid product format: On property ${keys[i]}, expected type ${TProduct[keys[i]]} but got type ${typeof product[keys[i]]}`));
    }
  }
  return Promise.resolve(product);
};

export {
  verifyId, verifyProduct, verifyReview,
};
