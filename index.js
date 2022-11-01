const express = require('express');

const app = express();

app.route('/').get(
  (req, res) => res.send('hello')
);

app.listen(3000);
