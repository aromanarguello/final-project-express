const express         = require('express');
const RecipesModel    = require('../models/recipes-model');
const UserModel       = require('../models/user-model');
const SurveyModel     = require('../models/survey-model');

const router = express.Router();

router.get('/recipes', (req, res, next) => {
  RecipesModel
  .find()
  .limit(25)
  .exec()
  .then( recipeResults => {
    res.status(200).json(recipeResults);
  })
  .catch( err => {
    console.log( err );
    console.log( 'GET /recipes ERROR');

    res.status(500).json({ error: 'Recipe database error'});
  });
});

router.post('/recipes', (req, res, next)=>{
  const theRecipe = new RecipesModel({
    name:         req.body.name,
    calories:     req.body.calories,
    recipeUrl:    req.body.recipeUrl,
    img:          req.body.img,
    description:  req.body.description,
    allergies: {
      peanuts:    req.body.peanuts,
      lactose:    req.body.lactose
    }
  });

  theRecipe.save()
    .then( () =>{
      res.status(200).json(theRecipe);
    })
    .catch( err => {
      if(err.errors) {
        res.status(400).json(err.errors);
      }
      else {
        res.status(500).json({ err: 'Recipe list database error'})
      }
    })
});

router.post('/survey', (req, res, next) =>{
  const surveyAnswers = new SurveyModel({
    height: req.body.height,
    weight: req.body.weight,
    age:    req.body.age,
    allergies: {
                peanuts: req.body.peanuts,
                lactose: req.body.lactose
               },
    energyOne: req.body.energyOne,
    energyTwo: req.body.energyTwo,
    energyThree: req.body.energyThree
  });

  surveyAnswers.save()
    .then( ()=> {
      res.status(200).json(surveyAnswers);
    })
    .catch( err => {
      if(err.errors) {
        res.status(400).json(err.errors);
      }
      else {
        res.status(500).json({ err: 'Survey database error'})
      }
    })
});



module.exports = router;
