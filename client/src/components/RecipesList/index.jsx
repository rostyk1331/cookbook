import React from "react";
import Recipe from "../Recipe";

const RecipesList = ({ recipesList, onRecipeSelect }) => {
  return (
    <div className="row">
      {recipesList.map(recipe => (
        <Recipe
          recipe={recipe}
          onRecipeSelect={onRecipeSelect}
          key={recipe._id}
        />
      ))}
    </div>
  );
};

export default RecipesList;
