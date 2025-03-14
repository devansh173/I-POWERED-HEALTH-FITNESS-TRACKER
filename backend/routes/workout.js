const express = require('express');
const Workout = require('../models/Workout');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create a new workout (secured)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const workout = new Workout({ userId: req.user.id, ...req.body });
    await workout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get workouts for the current user (secured)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
