const express = require('express');

const app = express();

//middleware
app.use(express.json());

let author = "Robert"

app.route('/').get(
  (req, res) => res.send(author)
);

app.route('/').post(
  (req, res) => res.send(req.body)
);

app.route('/').put(
  (req, res) => {
    author = req.body.author;
    res.send(author);
  }
);

app.route('/:id').delete(
  (req, res) => res.send(req.params.id)
);

app.listen(3000);
