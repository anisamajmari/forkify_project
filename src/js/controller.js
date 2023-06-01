import { async } from "regenerator-runtime";

import * as model from "./model.js";

const controlRecipe = async function () {
  try {
    await model.loadRecipe();
  } catch (err) {
    console.log(`${err}`);
  }
};
controlRecipe();
