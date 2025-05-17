export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const fetchRecipes = (query = "pizza") => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=your_app_id&app_key=your_app_key&from=0&to=50`
    );
    const data = await response.json();
    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data.hits });
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});