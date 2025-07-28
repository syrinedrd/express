// server.js

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Serveur Express.js fonctionne 🧩');
});

app.listen(PORT, () => {
  console.log(`Serveur Express en marche sur http://localhost:${PORT}`);
});
