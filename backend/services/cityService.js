
const { State } = require("countries-state-list");


async function getCitiesByCountry(countryCode) {
    const states = State.getStatesOfCountry(countryCode);
    return states.filter((state) => !state.name.includes("Division")).map((state) => ({
        name: state.name.replace(" District", ""),
        code: state.isoCode,
        lat: state.latitude,
        long: state.longitude
    }))
}

module.exports = {
    getCitiesByCountry
}