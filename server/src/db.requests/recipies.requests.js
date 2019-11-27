import { Recipe } from "../models/recipe.model.js";

export const findAllRecipies = async () => {
  try {
    const recipies = await Recipe.find().sort("-createdAt");

    return recipies;
  } catch (e) {
    console.error(e);
  }
};

export const findRecipeById = async id => {
  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      throw new Error("Couldn't find a recipe");
    }

    return recipe;
  } catch (e) {
    console.error(e);
  }
};

export const createRecipe = async ({ title, description }) => {
  try {
    const recipe = new Recipe({
      title,
      description
    });
    const newRecipe = await recipe.save();

    if (!newRecipe) {
      throw new Error("Couldn't create a recipe.");
    }

    return newRecipe;
  } catch (e) {
    console.error(e);
  }
};

export const updateRecipeById = async (id, { title, description }) => {
  try {
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

    if (!updatedRecipe) {
      throw new Error("Couldn't update a recipe.");
    }

    return updatedRecipe;
  } catch (e) {
    console.error(e);
  }
};

export const removeRecipeById = async id => {
  try {
    const deletedRecipe = await Recipe.findByIdAndRemove(id);

    if (!deletedRecipe) {
      throw new Error("Couldn't delete a recipe.");
    }

    return deletedRecipe;
  } catch (e) {
    console.error(e);
  }
};
