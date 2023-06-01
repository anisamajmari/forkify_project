import { async } from "regenerator-runtime";

import { AJAX } from "./helpers.js";
import { API_URL } from "./config.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    title: recipe.title,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
  };
};

export const loadRecipe = async function () {
  try {
    const data = await AJAX(`${API_URL}5ed6604591c37cdc054bc886`);
    state.recipe = createRecipeObject(data);

    console.log(state.recipe);
  } catch (err) {
    console.log(`${err}`);
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    console.log(err);
  }
};
