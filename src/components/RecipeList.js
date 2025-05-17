import React from "react";

const RecipeList = ({ recipes, onToggleFavorite }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.recipe.label}>
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <p>{recipe.recipe.source}</p>
          <button onClick={() => onToggleFavorite(recipe.recipe.label)}>
            {recipe.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;