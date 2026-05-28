const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Dockerfile funcionando!');
});

app.listen(3000);