const express = require("express");
const { getCountries } = require("../controllers/countryController");
const router = express.Router();


router.get("/countries", getCountries);

module.exports = router;