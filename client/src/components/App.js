import React from "react";
import RecipesList from "./RecipesList";
import SelectedRecipe from "./SelectedRecipe";
import RecipeModal from "./RecipeModal";

class App extends React.Component {
  state = { recipesList: [], selectedRecipe: null };

  componentDidMount() {
    fetch("http://localhost:4000/recipes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipesList: data.recipes,
          selectedRecipe: data.recipes[0]
        });
      });
  }

  onRecipeSelect = recipe => {
    this.setState({ selectedRecipe: recipe });
  };

  onRecipeDelete = id => {
    fetch(`http://localhost:4000/recipes/${id}`, { method: "DELETE" })
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipesList: this.state.recipesList.filter(
            recipe => recipe._id !== id
          ),
          selectedRecipe:
            this.state.selectedRecipe._id !== this.state.recipesList[0]._id
              ? this.state.recipesList[0]
              : null
        });
      });
  };

  onRecipeAdd = body => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    };
    fetch("http://localhost:4000/recipes", options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipesList: [data.recipe, ...this.state.recipesList],
          selectedRecipe: data.recipe
        });
      });
  };

  onRecipeUpdate = ({ title, description, id }) => {
    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, description })
    };
    fetch(`http://localhost:4000/recipes/${id}`, options)
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipesList: this.state.recipesList.map(recipe => {
            if (recipe._id === id) {
              recipe = data.recipe;
            }
            return recipe;
          }),
          selectedRecipe: data.recipe
        });
      });
  };

  render() {
    const { recipesList, selectedRecipe } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="text-center">CookBook</h1>
            <RecipeModal
              label={"Add New Recipe"}
              onRecipeAdd={this.onRecipeAdd}
            />
            <RecipesList
              recipesList={recipesList}
              onRecipeSelect={this.onRecipeSelect}
              onRecipeDelete={this.onRecipeDelete}
            />
          </div>
          <div className="col-sm-6 vh-100 overflow-auto sticky-top border-left">
            {selectedRecipe && (
              <SelectedRecipe
                recipe={selectedRecipe}
                onRecipeDelete={this.onRecipeDelete}
                onRecipeUpdate={this.onRecipeUpdate}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
