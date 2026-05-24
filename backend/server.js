const express = require("express");
const cors = require("cors");
const countryRoutes = require("./routes/countryRoutes");
const cityRoutes = require("./routes/cityRoutes.js");
const weatherRoutes = require("./routes/weatherRoutes.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", countryRoutes);
app.use("/api", cityRoutes);
app.use("/api", weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});