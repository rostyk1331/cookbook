import {
  findAllRecipes,
  findRecipeById,
  createRecipe,
  removeRecipeById,
  updateRecipeById
} from "../db.requests/recipes.requests.js";

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await findAllRecipes();

    res.json({ recipes });
  } catch (e) {
    console.error(e);
  }
};

export const getRecipe = async (req, res) => {
  try {
    const recipe = await findRecipeById(req.params.id);

    res.json({ recipe });
  } catch (e) {
    console.error(e);
  }
};

export const addRecipe = async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);

    res.json({ recipe });
  } catch (e) {
    console.error(e);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await updateRecipeById(req.params.id, req.body);

    res.json({ recipe });
  } catch (e) {
    console.error(e);
  }
};

export const removeRecipe = async (req, res) => {
  try {
    const recipe = await removeRecipeById(req.params.id);

    res.json({ recipe });
  } catch (e) {
    console.error(e);
  }
};
