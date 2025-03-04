import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import workoutRoute from "./routes/workoutRoute.js";
const app = express();

app.use(express.json());
app.use("/api/workout", workoutRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
