const RecipeModel = require('../models/recipes-model');
require('dotenv');
require('../config/mongoose-setup');

const recipeInfo = [
  {
    name: "Asopao de Pollo",
    calories: 550,
    recipeUrl: "http://allrecipes.com/recipe/228356/asopao-de-pollo/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%203",
    img: "http://images.media-allrecipes.com/userphotos/560x315/885263.jpg",
    description: "This traditional Puerto Rican chicken and rice stew is filling and flavorful.",
    allergies: {
                  peanuts: false,
                  lactose: false
                }
  }
];
RecipeModel.create(recipeInfo)
  .then( recipeResults => {
    console.log(`Inserted ${recipeResults.length}
      recipes`);
  })
  .catch( err => {
      console.log( err );
  });
