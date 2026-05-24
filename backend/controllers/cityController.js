
const { getCitiesByCountry } = require("../services/cityService"); 
async function getCities(req, res) {
    const countryCode = req.query.countryCode;   
    
    if (!countryCode) {
        return res.status(400).json({ message: "Country code is required" });
    }


    try {
        const cities = await getCitiesByCountry(countryCode);
        return res.json(cities); 
    } catch (error) {
        return res.status(500).json({ message: error.message || "Internal server error" });
    }



}


module.exports = {
    getCities
}