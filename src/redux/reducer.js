import { FETCH_RECIPES_SUCCESS, TOGGLE_FAVORITE } from "./actions";

const initialState = {
  recipes: [],
  favorites: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return { ...state, recipes: action.payload };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter((id) => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default recipeReducer;