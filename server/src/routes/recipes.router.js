import express from "express";
import {
  getAllRecipes,
  getRecipe,
  addRecipe,
  removeRecipe,
  updateRecipe
} from "../controllers/recipes.controllers.js";

export const recipesRouter = express.Router();

recipesRouter.get("/", getAllRecipes);
recipesRouter.post("/", addRecipe);
recipesRouter.get("/:id", getRecipe);
recipesRouter.put("/:id", updateRecipe);
recipesRouter.delete("/:id", removeRecipe);
