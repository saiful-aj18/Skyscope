const { Country } = require("countries-state-list");



function getCountries(req, res) {
    const countries = Country.getAllCountries().map((country => ({
        name: country.name,
        code: country.isoCode
    })));

    res.json(countries)
}


module.exports = {
    getCountries
}