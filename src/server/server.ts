import * as express from 'express';
import * as Cors from 'cors';
import * as path from 'path';
import database from '../database/db';

const server = express();
const json = express.json();
const cors = Cors();

server.use(cors);
server.use(json);

server.use('/', express.static('public'));
server.use('/bundle', express.static('public/bundle.js'));
server.use('/style', express.static('public/style.css'));

// Loader,io verification
server.get('/loaderio-3e6d7d5ca39c1a17ab4b0c9b06ace391', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../loaderio-3e6d7d5ca39c1a17ab4b0c9b06ace391.txt'));
});

// Products
server.get('/products/:id', (req, res) => {
  const { id } = req.params;
  database.getProduct(Number(id))
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send();
    });
});

server.post('/products', (req, res) => {
  const { product } = req.body;
  database.addProduct(product)
    .then((insertCount) => {
      if (insertCount) {
        res.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).send('Error: could not create new product');
    });
});


server.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const { newProduct } = req.body;
  database.replaceProduct(id, newProduct)
    .then((replaceCount) => {
      if (replaceCount) {
        res.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).send('Error: could not replace product');
    });
});

server.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  database.deleteProduct(id)
    .then((deleteCount) => {
      if (deleteCount) {
        res.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).send('Error: could not delete product');
    });
});

// Reviews
server.patch('/products/:id/reviews', (req, res) => {
  const { productId } = req.params;
  const id = Number(productId);
  const { newReview } = req.body;
  database.addReview(id, newReview)
    .then((updateCount) => {
      if (updateCount) {
        res.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).send('Error: could not add review');
    });
});

server.delete('/products/:id/reviews', (req, res) => {
  const { productId } = req.params;
  const id = Number(productId);
  const { oldReview } = req.body;
  database.addReview(id, oldReview)
    .then((updateCount) => {
      if (updateCount) {
        res.status(200).end();
      } else {
        throw new Error();
      }
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).send('Error: could not delete review');
    });
});

export default server;
