const axios = require("axios");

async function getCurrentWeather(lat, lon) {
    const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
            params: {
                latitude: lat,
                longitude: lon,
                current: [
                    "temperature_2m",
                    "wind_speed_10m",
                    "weather_code",
                    "relative_humidity_2m",
                    "rain"
                ].join(",")
            }
        }
    );

    return response.data.current;
}

function describeWeather(code) {
    const codes = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Slight snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Thunderstorm with heavy hail"
    };

    return codes[code] || "Unknown";
}

module.exports = {
    getCurrentWeather,
    describeWeather
};