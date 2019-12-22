import * as express from 'express';
import * as Cors from 'cors';
import { db } from '../database/db';

const server = express();
const json = express.json();
const cors = Cors();

server.use(cors);
server.use(json);

server.use('/', express.static('public'));
server.use('/bundle', express.static('public/bundle.js'));
server.use('/style', express.static('public/style.css'));

server.get('/products/:id', (req, res) => {
  const { id } = req.params;
  console.log(typeof id)
  db.getProduct(Number(id))
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: Product Not Found')
    });
});

server.patch('products/:id/reviews/update', (req, res) => {
  const { productId, newReviewAvg, newReviewCount } = req.body;
  db.addReview(productId, newReviewAvg, newReviewCount)
    .then((updateCount) => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send('Error: Product Not Found');
    });
});

export { server };
