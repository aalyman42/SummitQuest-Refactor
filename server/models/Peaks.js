const { Schema, model } = require("mongoose");

const peakSchema = new Schema({
  peakName: {
    type: String,
    require: true,
  },
  elevation: {
    type: Number,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  difficulty: {
    type: String,
  },
  permitRequired: {
    type: Boolean,
  },
  peakImage: {
    type: String,
  },
});

const Peak = model("Peak", peakSchema);

module.exports = Peak;
