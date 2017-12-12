const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const recipeSchema = new Schema(
  {
    name: {
       type:     String
       // required: [true, 'Name is required']
    },

    calories: {
      type:     Number
      // required: [true, 'Calories are required']
    },

    recipeUrl: {
      type:     String
      // required: [true, 'Link required']
    },

    img: {
      type:     String
      // default: './images/default-image.jpg'
     },

    description: {
      type:     String
    },

    allergies: {
      peanuts:  Boolean,
      lactose:  Boolean
    }
  } // END
);

const RecipesModel = mongoose.model( 'Recipe', recipeSchema);

module.exports = RecipesModel;

// allergies: {
//
//     peanuts: {
//               type:     Boolean,
//               required: [true, 'Need to inform if recipe contains PEANUTS!']
//      },
//
//     lactose: {
//               type:     Boolean,
//               required: [true, 'Need to inform if recipe contains LACTOSE PRODUCTS!']
//      }
  // },
