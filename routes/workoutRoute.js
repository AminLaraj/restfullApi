import express from "express";
import Workout from "../models/Workout.js";
const router = express.Router();

// alle workouts
router.get("/", (req, res) => {
  res.json("Welkom op de app");
});

// enkele workout
router.get("/:id", (req, res) => {
  res.json("Welkom op de app");
});

// workout toevoegen
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
