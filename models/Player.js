const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: { type: String },
  time: { type: String },
});

module.exports = mongoose.model("player", PlayerSchema);
