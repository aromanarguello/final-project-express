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
    energyOne:   { type: Boolean },
    energyTwo:   { type: Boolean },
    energyThree: { type: Boolean },
    male:        { type: Boolean },
    female:      { type: Boolean },
    owner:       {
                   type:     Schema.Types.ObjectId,
                   required: [true, "Required"]
                 }
  },
  {
    timestamps: true
  }
);



SurveyModel       = mongoose.model( "Survey", surveySchema);

module.exports    = SurveyModel;
