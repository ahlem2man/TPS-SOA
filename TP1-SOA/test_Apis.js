const axios = require("axios");
axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data")
    .then(response => console.log("Open Library:", response.data))
    .catch(error => console.error("Erreur Open Library:", error));

axios.get("https://api.nasa.gov/planetary/apod?api_key=38f9264b8e345e5059d64b5e08c19663")
    .then(response => console.log("NASA API:", response.data))
    .catch(error => console.error("Erreur NASA:", error));

axios.get("https://randomuser.me/api/")
    .then(response => console.log("Random User:", response.data.results[0]))
    .catch(error => console.error("Erreur Random User:", error));
