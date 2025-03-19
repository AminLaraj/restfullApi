import mongoose from "mongoose";
import Workout from "../models/Workout.js";
// Haal alle workouts op
export const getAllWorkouts = async (req, res) => {
  // Nieuwste b
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};
// Haal één workout op aan de hand van een ID
export const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Geen geldige workout ID" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout niet gevonden" });
  }
  res.status(200).json(workout);
};
// Maak een nieuwe workout aan
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
