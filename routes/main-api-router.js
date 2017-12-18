const express         = require('express');
const RecipesModel    = require('../models/recipes-model');
const UserModel       = require('../models/user-model');
const SurveyModel     = require('../models/survey-model');
const Passport        = require('passport');

const router = express.Router();

router.get('/recipes', (req, res, next) => {
  RecipesModel
  .find()
  .limit(8)
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
        res.status(500).json({ err: 'Recipe list database error'});
      }
    });
});

router.post('/survey', (req, res, next) =>{
console.log(req.user);
  if (req.user === undefined) {
    console.log(req.user);
    res.status(500).json({ err: 'Not logged in'});
    return;
  }

  const surveyAnswers = new SurveyModel({
    height:      req.body.height,
    weight:      req.body.weight,
    age:         req.body.age,
    allergies: {
                peanuts: req.body.peanuts,
                lactose: req.body.lactose
               },
    male:        req.body.male,
    female:      req.body.female,
    energyOne:   req.body.energyOne,
    energyTwo:   req.body.energyTwo,
    energyThree: req.body.energyThree,
    owner:       req.user._id
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
        res.status(500).json({ err: 'Survey database error'});
      }
    });

}); // POST /survey

router.get("/results", (req, res, next) => {
  SurveyModel
    .find({ owner: req.user })
    .sort({ createdAt: -1})
    .limit(1)
    .exec()
    .then((surveyResults) => {
      console.log(surveyResults.height);
      res.status(200).json(surveyResults);

    })
    .catch( err => {
      if(err.errors) {
        res.status(400).json(err.errors);
      }
      else {
        res.status(500).json({ err: 'Survey result error'});
      }
    });

});

// router.get('/survey/:surveyId', (req, res, next) => {
//
//   SurveyModel.findById(req.params.surveyId)
//   .then( surveyFromDb => {
//     if(surveyFromDb === null) {
//       res.status(404).json({ error: "Survey Result not found"})
//     }
//     else {
//       res.status(200).json(surveyFromDb);
//     }
//   })
//   .catch( err => {
//       console.log("GET /survey/:surveyId ERROR!");
//       res.status(500).json({ error: "Survey database error"});
//   });
// }); // GET /survey/:surveyId



module.exports = router;
