const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  times: { type: Array, default: [] },
});

module.exports = mongoose.model("game", GameSchema);
