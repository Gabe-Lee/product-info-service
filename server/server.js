const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;
const db = require('./db.js');


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/displayProduct', (req, res) => {
    db.selectOneProduct((err, results) => {
        if (err) {
            console.log(err);
            res.sendStatus(404)
        } else {
            res.send(results);
        }
    }, 27)
});



app.listen(port, () => console.log(`Listening on port ${port}!`));




