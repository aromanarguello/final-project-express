require('dotenv').config();

require('../config/mongoose-setup');

const RecipeModel = require('../models/recipes-model');

const recipeInfo = [
  {
    name: "Asopao de Pollo",
    calories: 550,
    recipeUrl: "http://allrecipes.com/recipe/228356/asopao-de-pollo/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%203",
    img: "http://images.media-allrecipes.com/userphotos/560x315/885263.jpg",
    description: "This traditional Puerto Rican chicken and rice stew is filling and flavorful.",
    allergies:
                {
                  peanuts: false,
                  lactose: false
                }
  },
  {
    name: "Bistec Encebollado",
    calories: 423,
    recipeUrl: "http://allrecipes.com/recipe/152032/bistec-encebollao/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%206",
    img: "http://images.media-allrecipes.com/userphotos/720x405/4561539.jpg",
    description: "A staple in Puerto Rican cooking. Serve with white rice and tostones.",
    allergies:
              {
                  peanuts: false,
                  lactose: false
              }
  },
  {
    name: "Quick Chicken Piccata",
    calories: 321,
    recipeUrl: "http://allrecipes.com/recipe/220751/quick-chicken-piccata/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2020",
    img: "http://images.media-allrecipes.com/userphotos/720x405/4540068.jpg",
    description: "These quick and easy pan-fried chicken breasts are topped with a simple pan sauce made with capers, butter, white wine, and lemon juice.",
    allergies:
              {
                peantus: false,
                lactose: false
              }
  },
  {
    name: "The Best Parmesan Chicken Bake",
    calories: 477,
    recipeUrl: "http://allrecipes.com/recipe/219164/the-best-parmesan-chicken-bake/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2043",
    img: "http://images.media-allrecipes.com/userphotos/720x405/4577461.jpg",
    description: "This chicken Parmesan is done casserole style (so, no breading or frying!), but still offers up that irresistible combination of tender chicken, crunchy/cheesy coating, and flavorful sauce.",
    allergies:
              {
                peantus: false,
                lactose: true
              }
  },
  {
    name: "General Tsaos Chicken II",
    calories: 634,
    recipeUrl: "http://allrecipes.com/recipe/91499/general-tsaos-chicken-ii/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2015",
    img: "http://images.media-allrecipes.com/userphotos/720x405/4655929.jpg",
    description: "A genuinely mouthwatering dish with an Asian kick that will knock your chopsticks off! Don't be fooled by other General Tsao impostors: this is simply the best Chinese chicken you will ever have. With a flair of peanut oil, a streak of sesame, a dash of orange, and a sweet spot for hot, this is sure to be a favorite. Just don't forget to deep-fry twice! Serve with steamed broccoli and white rice.",
    allergies:
              {
                peantus: true,
                lactose: false
              }
  },
  {
    name: "Hamburger Steak with Onions and Gravy",
    calories: 319,
    recipeUrl: "http://allrecipes.com/recipe/78370/hamburger-steak-with-onions-and-gravy/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2054",
    img: "http://images.media-allrecipes.com/userphotos/720x405/4675175.jpg",
    description: "An easy-to-make classic featuring tasty hamburger 'steaks' smothered in gravy and onions. Traditionally served with hot white rice or potatoes, it's a great way to dress up a pound of ground beef and you probably have all the ingredients on hand!",
    allergies:
              {
                peantus: false,
                lactose: false
              }
  },
  {
    name: "Maple Salmon",
    calories: 265,
    recipeUrl: "http://allrecipes.com/recipe/51283/maple-salmon/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2068",
    img: "http://images.media-allrecipes.com/userphotos/720x405/862371.jpg",
    description: "This is the best and most delicious salmon recipe, and very easy to prepare. I love maple in everything and put this together one night. My husband totally loved it; he did not like salmon that much until he had this.",
    allergies:
              {
                peantus: false,
                lactose: false
              }
  },
  {
    name: "Easy Meatloaf",
    calories: 372,
    recipeUrl: "http://allrecipes.com/recipe/16354/easy-meatloaf/?internalSource=previously%20viewed&referringContentType=home%20page&clickId=cardslot%2099",
    img: "http://images.media-allrecipes.com/userphotos/720x405/682282.jpg",
    description: "TThis is a very easy and no fail recipe for meatloaf. It won't take long to make at all, and it's quite good!",
    allergies:
              {
                peantus: false,
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
