const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//Flight has multiple pilots and pilot = manyflights
//Link pilots --> flights // link flights --> pilots
const pilotSchema = new Schema(
  {
    name: { type: String},
    description: String,
    Email: String,
  },
  {
    timestamps: String,
  }
);
module.exports = mongoose.model("Pilot", pilotSchema);