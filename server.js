const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json({ extended: true }));

// Connect DB
connectDB();

// Define Routes
app.use("/api/game", require("./routes/game"));
app.use("/api/player", require("./routes/player"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
