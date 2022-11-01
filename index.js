const express = require('express');
const axios = require('axios');

const app = express();

//middleware
app.use(express.json());

app.route('/').get(
  (req, res) => {
    axios.get('https://api.github.com/users/Rob30Garcia')
      .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
      .catch(err => console.error(err))
  }
);

// app.route('/').post(
//   (req, res) => res.send(req.body)
// );

// app.route('/').put(
//   (req, res) => {
//     author = req.body.author;
//     res.send(author);
//   }
// );

// app.route('/:id').delete(
//   (req, res) => res.send(req.params.id)
// );

app.listen(3000);
