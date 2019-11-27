import {
  findAllRecipies,
  findRecipeById,
  createRecipe,
  removeRecipeById,
  updateRecipeById
} from "../db.requests/recipies.requests.js";

export const getAllRecipies = async (req, res) => {
  const recipies = await findAllRecipies();

  res.json({ recipies });
};

export const getRecipe = async (req, res) => {
  const recipe = await findRecipeById(req.params.id);

  res.json({ recipe });
};

export const addRecipe = async (req, res) => {
  const recipe = await createRecipe(req.body);

  res.json({ recipe });
};

export const updateRecipe = async (req, res) => {
  const recipe = await updateRecipeById(req.params.id, req.body);

  res.json({ recipe });
};

export const removeRecipe = async (req, res) => {
  const recipe = await removeRecipeById(req.params.id);

  res.json({ recipe });
};
