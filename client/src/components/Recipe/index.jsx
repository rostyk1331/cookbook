import React from "react";
import img from "./recipe.jpg";
import "./style.css";

const Recipe = ({ recipe, onRecipeSelect }) => {
  return (
    <div className="col-md-6 mb-2 d-flex">
      <div className="border rounded d-flex flex-column">
        <img
          src={img}
          alt="recipe"
          className="img-fluid cursor-pointer w-100"
          onClick={() => onRecipeSelect(recipe)}
        />
        <h5 className="text-center text-break">{recipe.title}</h5>
        <p className="text-break p-1">
          {recipe.description.length > 50
            ? `${recipe.description.substring(0, 50)}...`
            : recipe.description}
        </p>
        <div className="d-flex justify-content-between mt-auto p-1">
          <p className="m-0 align-self-center">
            {new Date(Date.parse(recipe.createdAt)).toLocaleString([], {
              dateStyle: "short",
              timeStyle: "short"
            })}
          </p>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => onRecipeSelect(recipe)}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
