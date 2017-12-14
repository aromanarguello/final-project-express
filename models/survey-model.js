const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const surveySchema = new Schema(
  {
    height: { type: Number },
    weight: { type: Number },
    age:    { type: Number },
    allergies: {
                  peanuts: { type: Boolean },
                  lactose: { type: Boolean }
                },
    energyOne:   { type: Boolean},
    energyTwo:   { type: Boolean},
    energyThree: { type: Boolean}


  }
)





SurveyModel       = mongoose.model( "Survey", surveySchema);

module.exports    = SurveyModel;
