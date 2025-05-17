import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, toggleFavorite } from "./redux/actions";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes || []);
  const favorites = useSelector((state) => state.favorites || []);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(fetchRecipes(term));
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>Recipe App</h1>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} onToggleFavorite={(id) => dispatch(toggleFavorite(id))} />
        <FavoritesList favorites={favorites} />
      </div>
    </Provider>
  );
};

export default App;