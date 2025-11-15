

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`;

async function getWeatherData(city) {
    const url = BASE_URL + city + "&units=metric&lang=fr";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Description :", data.weather[0].description);
        console.log("Température :", data.main.temp + "°C");
        console.log("Humidité :", data.main.humidity + "%");
    } catch (error) {
        console.error("Erreur :", error);
    }
}

getWeatherData("Sousse");
