# Étape 1 : construire le frontend
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : servir le build via Nginx
FROM nginx:alpine

# Copier les fichiers buildés dans le dossier par défaut de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80 (celui de Nginx)
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
