import db from './postgres'; // Change to reference chosen database service
import { Database } from '../Interfaces';
import { verifyId, verifyProduct, verifyReview } from './utils';

// Database Access
const database: Database = {

  // (GET) => /products/:id
  getProduct(id) {
    return verifyId(id)
      .then(() => db.getProduct(id));
  },

  // (POST) -> /products
  addProduct(product) {
    return verifyProduct(product)
      .then(() => db.addProduct(product));
  },

  // (PUT) -> /products/:id
  replaceProduct(id, newProduct) {
    return verifyId(id)
      .then(() => verifyProduct(newProduct))
      .then(() => db.replaceProduct(id, newProduct));
  },

  // (DELETE) -> /products/:id
  deleteProduct(id) {
    return verifyId(id)
      .then(() => db.deleteProduct(id));
  },

  // (PATCH) => /products/:id/reviews
  addReview(id, newReview) {
    return verifyId(id)
      .then(() => verifyReview(newReview))
      .then(() => db.addReview(id, newReview));
  },

  // (DELETE) -> /products/:id/reviews
  deleteReview(id, oldReview) {
    return verifyId(id)
      .then(() => verifyReview(oldReview))
      .then(() => db.deleteReview(id, oldReview));
  },

  beginTest(savePoint = 'save') {
    return db.beginTest(savePoint);
  },

  endTest(savePoint = 'save') {
    return db.endTest(savePoint);
  },
};

export default database;
