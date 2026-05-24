# 🌦️ Skyscope

Skyscope is a full-stack weather application that provides real-time weather information using the Open-Meteo API.

Users can:

* Select countries and cities
* View live weather conditions
* Check temperature, wind speed, humidity, and rain data
* Get weather descriptions based on weather codes

---

## 🚀 Live Demo
https://skyscope73.netlify.app/

### Frontend

Add your Netlify link here

### Backend API

Add your Render API link here

---

## ✨ Features

* 🌍 Country & city selection
* 🌡️ Real-time temperature data
* 💨 Wind speed tracking
* 🌧️ Rain information
* 💧 Humidity monitoring
* ⚡ Dynamic weather descriptions
* 📱 Responsive UI
* 🔗 API integration with Open-Meteo

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* Tailwind
* JavaScript

### Backend

* Node.js
* Express.js
* Axios

### API

* Open-Meteo Weather API

---

## 📂 Project Structure

```bash
Skyscope/
│
├── frontend/
│   ├── index.html 
│   └── script.js
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/saiful-aj18/Skyscope.git
cd Skyscope
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Start Backend Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:3000
```

---

### 4️⃣ Run Frontend

Open:

```bash
frontend/index.html
```

using Live Server or directly in browser.

---

## 🌐 API Endpoints

### Get Countries

```http
GET /api/countries
```

### Get Cities

```http
GET /api/cities?countryCode=BD
```

### Get Weather

```http
GET /api/weather?city=Dhaka&country=BD&lat=23.8103&lon=90.4125
```

---



## 🔧 Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=3000
```

---

## 🚀 Deployment

### Frontend

* Netlify

### Backend

* Render

---

## 📌 Future Improvements

* 🌙 Dark mode
* 📍 Geolocation weather
* 📅 7-day forecast
* 🌎 Search by current location
* 📊 Weather charts
* 🔔 Weather alerts

---

## 👨‍💻 Author

### Saiful

GitHub:
https://github.com/saiful-aj18

---

## 📄 License

This project is licensed under the MIT License.
