const express = require("express");
const Player = require("../models/Player");
const router = express.Router();

// Get Player
router.get("/:id", async (req, res) => {
  try {
    // Find Player
    let player = await Player.findById(req.params.id);
    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Get Players
router.get("/", async (req, res) => {
  try {
    // Find Player
    let players = await Player.find();
    res.json(players);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Create Player
router.post("/", async (req, res) => {
  const { name, time } = req.body;
  try {
    let player = new Player({ name, time });
    await player.save();
    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update Player
router.put("/:id", async (req, res) => {
  const { name, time } = req.body;

  const updatedPlayer = {};

  if (name) updatedPlayer.name = name;
  if (time) updatedPlayer.time = time;

  try {
    let player = await Player.findById(req.params.id);

    // Check If User Exists
    if (!player) {
      return res.status(404).json({ msg: "Player not found" });
    }

    // Update Player
    player = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: updatedPlayer },
      { new: true }
    );

    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
