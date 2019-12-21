import * as express from 'express';
import * as cors from 'cors';

const app = express();
const port = 3030;

import * as db from '../database/db';

app.use(cors());
app.use(express.json());

app.use('/', express.static('public'));
app.use('/bundle', express.static('public/bundle.js'));
app.use('/styleSheet', express.static('public/style.css'));

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  console.log(typeof id)
  db.selectOneProduct(Number(id))
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      res.status(500).send('Error: Product Not Found')
    });
});

app.patch('/updateReviewInfo', (req, res) => {
  const { productId, newReviewAvg, newReviewCount } = req.body;
  db.updateOneProduct(productId, newReviewAvg, newReviewCount)
    .then((result) => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send('Error: Product Not Found');
    });
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
