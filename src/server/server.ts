const express = require('express');
const cors = require('cors');

const app = express();
const port = 3030;
const db = require('./db');


app.use(cors());
app.use(express.json());

app.use('/', express.static('public'));

app.use('/bundle', express.static('public/bundle.js'));
app.use('/styleSheet', express.static('public/style.css'));

app.get('/displayProduct/:id', (req, res) => {
  const { id } = req.params;
  db.selectOneProduct((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  }, id);
});

app.patch('/updateReviewInfo', (req, res) => {
  const id = req.body.productId;
  const newAvg = req.body.newReviewAvg;
  const newTotal = req.body.newReviewCount;
  console.log(id);
  console.log(newAvg);
  console.log(newTotal);
  db.updateOneProduct((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  }, id, newAvg, newTotal);
});


app.listen(port, () => console.log(`Listening on port ${port}!`));
