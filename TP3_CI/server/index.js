// Importation des modules
const express = require('express');
const cors = require('cors');

// Création de l'application Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('🚀 Serveur Node.js en marche sur le port 9000 !');
});

// Démarrage du serveur
const PORT = 9000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Serveur Node.js démarré sur le port ${PORT}`);
});
