import React from "react";
import img from "../Recipe/recipe.jpg";
import RecipeModal from "../RecipeModal";
import "./style.css";

const SelectedRecipe = ({ recipe, onRecipeDelete, onRecipeUpdate }) => {
  return (
    <div className="pt-3">
      <img src={img} alt="recipe" className="img-fluid w-75 mx-auto d-block" />
      <h3 className="text-center break-word">{recipe.title}</h3>
      <p className="word-break">{recipe.description}</p>
      <div className="d-flex justify-content-between">
        <RecipeModal
          label={"Update"}
          id={recipe._id}
          onRecipeAdd={onRecipeUpdate}
          recipe={recipe}
        />
        <button
          type="button"
          className="btn btn-outline-danger mb-2"
          onClick={() => onRecipeDelete(recipe._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SelectedRecipe;
