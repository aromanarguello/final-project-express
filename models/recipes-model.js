const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const recipeSchema = new Schema(
  {

  }
);

const RecipeModel = mongoose.model( "Recipe", recipeSchema);

module.exports = RecipeModel;
