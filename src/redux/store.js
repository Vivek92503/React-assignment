import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import recipeReducer from "./reducer";

const store = createStore(recipeReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;