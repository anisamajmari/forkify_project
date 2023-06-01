import { async } from "regenerator-runtime";
import { AJAX } from "./helpers.js";

export const state = {
  recipe: {},
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
    const data = await AJAX(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    state.recipe = createRecipeObject(data);

    console.log(state.recipe);
  } catch (err) {
    console.log(`${err}`);
  }
};
