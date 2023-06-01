import { async } from "regenerator-runtime";

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

const controlRecipe = async function () {
  try {
    await model.loadRecipe();

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(`${err}`);
  }
};
controlRecipe();
