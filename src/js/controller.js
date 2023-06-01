import { async } from "regenerator-runtime";

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";

const controlRecipe = async function () {
  try {
    await model.loadRecipe();

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(`${err}`);
  }
};
controlRecipe();

const controlSearch = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(query);
  } catch (err) {
    console.log(err);
  }
};

const buton = document.querySelector(".search");
buton.addEventListener("submit", controlSearch);
