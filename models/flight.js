const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// comment schema
const commentSchema = new Schema(
  {
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userName: String,
  },
  {
    timestamps: true,
  }
);

// flight schema
const flightSchema = new Schema(
  {
    pilot: String,
    pilots: [{type: Schema.Types.ObjectId, ref: "Pilot"}],
    description: { type: String },
    plane: String,
    from: String,
    to: String,
    logged: Boolean,
    dateOfFlight: String,
    comments: [commentSchema],
    usersFollowing: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
