'use strict';

var tacoIngredients = {};

function addIngredient(tacoIngredients, ingredient, amount) {
  tacoIngredients[ingredient] = amount;
  return tacoIngredients;
}

function removeIngredient(tacoIngredients, ingredient) {
  delete tacoIngredients[ingredient];
  return tacoIngredients;
}

function updateIngredient(tacoIngredients, ingredient, amount) {
  tacoIngredients[ingredient] = amount;
  return tacoIngredients;
}

function readRecipe(tacoIngredients) {
  for (var ingredient in tacoIngredients) {
    console.log("this recipe calls for " + tacoIngredients[ingredient] + " of " + ingredient);
  }
}
