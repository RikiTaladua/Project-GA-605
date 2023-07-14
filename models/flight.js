const mongoose = require("mongoose");

const Schema = mongoose.Schema;



//Flight = manycomments // Comment belongs = flight.
//comment Schema in flighttSchema
const reviewSchema = new Schema(
  {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },


    //Comment = one user, one user --> manycomments
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: String,
    recommended: Boolean,
  },
  {
    timestamps: true,
  }
);


//Flight = many hosts // pilot = manyflights
const flightSchema = new Schema(
  {
    title: { type: String, required: true },
    pilots: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pilot" }],
    description: { type: String, required: true },
    plane: String,
    from: String,
    to: String,
    logged: Boolean,
    dateOfFlight: String,
    comments: [commentSchema],


//Flight = multiple users following //  Users follows many flights
    usersFollowing: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Flight", flightSchema);