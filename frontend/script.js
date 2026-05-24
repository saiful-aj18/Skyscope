const form = document.getElementById("weatherForm");
const countrySelect = document.getElementById("countrySelect");
const citySelect = document.getElementById("citySelect");
const message = document.getElementById("message");
const result = document.getElementById("result");
const resultCity = document.getElementById("resultCity");
const resultTemp = document.getElementById("resultTemp");
const resultDesc = document.getElementById("resultDesc");
const resultWind = document.getElementById("resultWind");
const resultRain = document.getElementById("resultRain");
const resultHumidity = document.getElementById("resultHumidity");

const DEFAULT_COUNTRY = "BD";
const DEFAULT_CITY = "Dhaka"

async function loadCountries() {
    message.textContent = "Loading countries...";

    try {
        const response = await fetch("https://skyscope-api.onrender.com/api/countries");
        const countries = await response.json();

        countrySelect.innerHTML = "<option value =''>Select a country</option>"

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country.code;
            option.textContent = country.name;
            countrySelect.appendChild(option)
        })

        countrySelect.value = DEFAULT_COUNTRY;
        await loadCities(DEFAULT_COUNTRY, DEFAULT_CITY);
        message.textContent = "";
    } catch (error) {
        message.textContent = error.message ||"Error loading countries";
    
    }
}

async function loadCities(countryCode, preferredCity) {
    citySelect.disabled = true;
    citySelect.innerHTML = "<option value =''>Loading cities...</option>"
    message.innerText = "Loading cities..."

    try {
        const response = await fetch(`https://skyscope-api.onrender.com/api/cities?countryCode=${countryCode}`);
        const cities = await response.json();

        citySelect.innerHTML = "<option value =''>Select a city</option>"

        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city.name;
            option.textContent = city.name;
            option.dataset.lat = city.lat;
            option.dataset.lon = city.long;
            citySelect.appendChild(option)
        })
   
        if (preferredCity) {
            const match = Array.from(citySelect.options).find(
                (option) => option.value === preferredCity
            );
            if (match) {
                citySelect.value = preferredCity;
            } else if (citySelect.options.length > 1) {
                citySelect.selectedIndex = 1;
            }
            } else if (citySelect.options.length > 1) {
            citySelect.selectedIndex = 1;
            }
        
    } catch (error) {
        message.textContent = error.message ||"Error loading cities";
    }finally {
        citySelect.disabled = false;
        message.textContent = "";
    }
        
}


loadCountries()


countrySelect.addEventListener("change", async (event) => {
    const countryCode = event.target.value;
    if(!countryCode) {
        citySelect.innerHTML = "<option value =''>Select a country first</option>"
        return;
    }
    await loadCities(countryCode);
})


form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = citySelect.value.trim();

    if (!city) {
        message.textContent = "Please select a city";
        result.classList.add("hidden");
        return;
    }

    message.textContent = "Loading....";
    result.classList.add("hidden");


    try {
        const selectedOption = citySelect.options[citySelect.selectedIndex];
        const lat = selectedOption.dataset.lat;
        const lng = selectedOption.dataset.lon;
        const country = countrySelect.value;

        const response = await fetch(`https://skyscope-api.onrender.com/api/weather?city=${city}&country=${country}&lat=${lat}&lon=${lng}`);
        const data = await response.json();

        if (!response.ok) {
            message.textContent = data.error || "Error fetching weather data";
            return;
        }

        message.textContent = "";

        resultCity.textContent = data.city;
        resultTemp.textContent = `${data.tempC}°C`;
        resultDesc.textContent = data.description;
        resultWind.textContent = `Wind: ${data.windKmh} km/h`;
        resultRain.textContent = `Rain: ${data.rainMm} mm`;
        resultHumidity.textContent = `Humidity: ${data.humidity}%`;
        result.classList.remove("hidden");
    } catch (error) {
        message.textContent = error.message || "Error fetching weather data";
    
    }

})