const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Connexion à MongoDB
connectDB();

// Middleware pour lire le JSON
app.use(express.json());

// Utiliser les routes
app.use('/api/users', userRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('🎉 API Express + MongoDB fonctionne !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
