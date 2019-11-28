import React from "react";
import RecipeModal from "../RecipeModal";
import img from "../Recipe/recipe.jpg";
import "./style.css";

class SelectedRecipe extends React.Component {
  state = { showVersions: false };

  onVersionsToggle = () => {
    this.setState({ showVersions: !this.state.showVersions });
  };

  render() {
    const { recipe, onRecipeUpdate, onRecipeDelete } = this.props;
    return (
      <div className="pt-3">
        <img
          src={img}
          alt="recipe"
          className="img-fluid w-75 mx-auto d-block"
        />
        <h3 className="text-center text-break">{recipe.title}</h3>
        <p className="text-break m-0">{recipe.description}</p>
        {!!recipe.previousVersions.length && (
          <div>
            <button
              className="btn btn-link btn-sm p-0"
              onClick={this.onVersionsToggle}
            >
              {this.state.showVersions ? "Hide" : "Show"} previous versions
            </button>
            {this.state.showVersions && (
              <div>
                {recipe.previousVersions.reverse().map((version, index) => (
                  <div key={index} className="recipe-version py-1">
                    <p className="m-0 text-break">
                      <span className="font-weight-bold">Title: </span>
                      {version.title}
                    </p>
                    <p className="m-0 text-break">
                      <span className="font-weight-bold">Description: </span>
                      {version.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="d-flex justify-content-between">
          <RecipeModal
            label={"Update"}
            id={recipe._id}
            onRecipeAdd={onRecipeUpdate}
            recipe={recipe}
          />
          <button
            type="button"
            className="btn btn-outline-danger my-2 shadow-none"
            onClick={() => onRecipeDelete(recipe._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default SelectedRecipe;
