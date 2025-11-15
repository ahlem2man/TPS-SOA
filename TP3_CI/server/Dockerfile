# Étape 1 : image de base Node.js
FROM node:20

# Étape 2 : définir le dossier de travail
WORKDIR /app

# Étape 3 : copier les fichiers de configuration
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du code
COPY . .

# Étape 6 : exposer le port
EXPOSE 9000

# Étape 7 : démarrer l'application
CMD ["npm", "start"]
