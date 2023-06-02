import { async } from "regenerator-runtime";

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(`${err}`);
  }
};
controlRecipe();

const controlSearch = async function () {
  try {
    // Get query
    const query = searchView.getQuery();
    if (!query) return;

    //Load search results
    await model.loadSearchResults(query);

    //Render search results
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
};
init();
