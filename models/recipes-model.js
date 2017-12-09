const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: {
       type:     String,
       required: [true, 'Name is required']
    },

    calories: {
      type:     Number,
      required: [true, 'Calories are required']
    },

    recipeUrl: {
      type:     String,
      required: [true, 'Link required']
    },

    img: {
      type:     String,
      default: './images/default-image.jpg'
     },

    allergies: {
      {
        peanuts: {
          type:     Boolean,
          required: [true, 'Need to inform if recipe contains PEANUTS!']
         },
        lactose: {
          type:     Boolean
          required: [true, 'Need to inform if recipe contains LACTOSE PRODUCTS!']
         }
      }
    },

    description: { type: String }
  } // END
);

const RecipeModel = mongoose.model( "Recipe", recipeSchema);

module.exports = RecipeModel;
