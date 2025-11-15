# TP2-SOA
## Description
Ce projet est un exemple d'implémentation d'une API RESTful avec Node.js, SQLite, et une sécurisation via Keycloak.

## Objectifs
L'objectif de ce projet était de créer une API permettant de gérer des personnes et d'ajouter un mécanisme d'authentification via OAuth 2.0 avec Keycloak.

## Compte Rendu

### Étape 1 : Mise en place de l'environnement
- Installation de Node.js, SQLite et Keycloak pour la gestion des utilisateurs et de l'authentification.
- Configuration de la base de données SQLite avec une table `personnes` comportant un champ `adresse`.

### Étape 2 : Création de l'API
Une API RESTful a été construite à l'aide de Express pour gérer les informations des personnes avec les routes suivantes :
GET /personnes : Récupérer la liste des personnes.
GET /personnes/:id : Récupérer une personne spécifique par ID.
POST /personnes : Ajouter une nouvelle personne.
PUT /personnes/:id : Mettre à jour les informations d'une personne existante.
DELETE /personnes/:id : Supprimer une personne de la base de données.
Le stockage des données a été effectué dans une base de données SQLite, avec la création d'une table personnes comportant les champs id, nom et adresse.
  ### Conclusion
Ce projet a permis de mettre en place une API sécurisée et de se familiariser avec l'intégration d'une solution de gestion des utilisateurs comme Keycloak.

