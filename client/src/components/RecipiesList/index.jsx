import React from "react";
import Recipe from "../Recipe";

const RecipiesList = ({ recipiesList, onRecipeSelect }) => {
  return (
    <div className="row">
      {recipiesList.map(recipe => (
        <Recipe
          recipe={recipe}
          onRecipeSelect={onRecipeSelect}
          key={recipe._id}
        />
      ))}
    </div>
  );
};

export default RecipiesList;
