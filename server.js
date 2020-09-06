const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

// Connect DB
connectDB();

// Define Routes
app.use("/api/game", require("./routes/game"));
app.use("/api/player", require("./routes/player"));

// Server static assests in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));
