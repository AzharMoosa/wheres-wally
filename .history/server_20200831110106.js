const express = require("express");

const app = express();

// Define Routes
app.use("/api/game", require("./routes/game"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
