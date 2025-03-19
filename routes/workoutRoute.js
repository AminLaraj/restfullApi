import express from "express";
import {
  createWorkout,
  getAllWorkouts,
  getWorkout,
} from "../controllers/workoutController.js";
const router = express.Router();
router.get("/", getAllWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
export default router;
