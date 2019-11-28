import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { recipesRouter } from "./src/routes/recipes.router.js";
dotenv.config();
const app = express();

mongoose.connect(process.env.DB_PATH, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(cors({ credentials: true, origin: process.env.FRONT_PATH }));
app.use(express.json());
app.use("/recipes", recipesRouter);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
