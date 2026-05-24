const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../controllers/weatherController");

router.get("/weather", getWeatherByCity)

module.exports = router;