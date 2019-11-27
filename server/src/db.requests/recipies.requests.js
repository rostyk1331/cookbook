import { Recipe } from "../models/recipe.model.js";

export const findAllRecipies = async () => {
  const recipies = await Recipe.find().sort("-createdAt");

  return recipies;
};

export const findRecipeById = async id => {
  const recipe = await Recipe.findById(id);

  return recipe;
};

export const createRecipe = async ({ title, description }) => {
  const recipe = new Recipe({
    title,
    description
  });
  const newRecipe = await recipe.save();

  return newRecipe;
};

export const updateRecipeById = async (id, { title, description }) => {
  const previous = await Recipe.findById(id);

  const updatedRecipe = await Recipe.findByIdAndUpdate(
    id,
    {
      title,
      description,
      $push: {
        previousVersions: {
          title: previous.title,
          description: previous.description
        }
      }
    },
    { new: true }
  );

  return updatedRecipe;
};

export const removeRecipeById = async id => {
  const deletedRecipe = await Recipe.findByIdAndRemove(id);

  return deletedRecipe;
};
