import express from "express";
import {
  getAllRecipies,
  getRecipe,
  addRecipe,
  removeRecipe,
  updateRecipe
} from "../controllers/recipies.controllers.js";

export const recipiesRouter = express.Router();

recipiesRouter.get("/", getAllRecipies);
recipiesRouter.post("/", addRecipe);
recipiesRouter.get("/:id", getRecipe);
recipiesRouter.put("/:id", updateRecipe);
recipiesRouter.delete("/:id", removeRecipe);
