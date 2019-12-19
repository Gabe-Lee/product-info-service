import * as express from 'express';
import * as pg from 'pg';
import * as cors from 'cors';

const app = express();
const port = 3030;

import * as db from '../database/db';


app.use(cors());
app.use(express.json());

app.use('/', express.static('public'));

app.use('/bundle', express.static('public/bundle.js'));
app.use('/styleSheet', express.static('public/style.css'));

app.get('/displayProduct/:id', (req, res) => {
  const { id } = req.params;
  db.selectOneProduct((err:Error, results:pg.QueryResult) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  }, Number(id));
});

app.patch('/updateReviewInfo', (req, res) => {
  const id:Number = req.body.productId;
  const newAvg:Number = req.body.newReviewAvg;
  const newTotal:Number = req.body.newReviewCount;
  console.log(id);
  console.log(newAvg);
  console.log(newTotal);
  db.updateOneProduct((err:Error, results:pg.QueryResult) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  }, id, newAvg, newTotal);
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
