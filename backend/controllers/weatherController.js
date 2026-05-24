

const { getCurrentWeather, describeWeather } = require("../services/weatherService");

async function getWeatherByCity(req, res) {
    const city = req.query.city;
    const country = req.query.country;
    const lat = req.query.lat;
    const lng = req.query.lon;
    
    if (!lat || !lng) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    try {
        const weather = await getCurrentWeather(lat, lng);

        return res.json({
            city: city,
            country: country,
            tempC: Math.round(weather.temperature_2m),
            windKmh: weather.wind_speed_10m,
            humidity: weather.relative_humidity_2m,
            rainMm: weather.rain,
            description: describeWeather(weather.weather_code),
            
        })
    } catch (error) {
        return res.status(500).json({ message: error.message || "Internal server error" });
    }

}

module.exports = {
    getWeatherByCity
}