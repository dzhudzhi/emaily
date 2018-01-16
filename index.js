const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('listen to port: 5000');
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
