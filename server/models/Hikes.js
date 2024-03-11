const { Schema, model } = require("mongoose");

const hikeSchema = new Schema({
  timeTaken: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
  completed: {
    type: Boolean,
  },
  journal: {
    type: String,
  },
});

const Hike = model("Hike", hikeSchema);

module.exports = Hike;
