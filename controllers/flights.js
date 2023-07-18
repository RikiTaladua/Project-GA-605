const Flight = require("../models/flight");
const Pilot = require("../models/pilot");


module.exports = {
  index,
  newFlight,
  create,
  show,
  edit,
  update,
  deleteFlight,
  follow,
};

async function index(req, res) {
  try {
    const flights = await Flight.find({}).sort({ plane: "asc" });
    res.render("flights/index", { flights });
  } catch (err) {
    console.log(err);
  }
}

function newFlight(req, res) {
  res.render("flights/newFlight");
}



async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)
      .populate("pilots")
      .exec();
    const comment = flight.comments;
    const pilots = await Pilot.find({ _id: { $nin: flight.pilots } });
    res.render("flights/showFlight", { flight, comment, pilots });
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id)
      .populate("pilots")
      .exec();
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    res.render("flights/edit", { flight });
  } catch (err) {
    console.log(err);
  }
}


async function create(req, res) {
  req.body.logged = !!req.body.logged;

  console.log("Date Received:", req.body.dateOfFlight); 
  try {
    req.body.dateOfFlight = new Date(req.body.dateOfFlight);
    const flight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
  }
}



async function update(req, res) {
  console.log(req.body); 
  req.body.logged = !!req.body.logged;
  try {
    const flight = await Flight.findById(req.params.id);
    flight.pilot = req.body.pilot;
    flight.pilots = req.body.pilots;
    flight.description = req.body.description;
    flight.plane = req.body.plane;
    flight.from = req.body.from;
    flight.to = req.body.to;

    console.log("Date Received:", req.body.dateOfFlight); 
    flight.dateOfFlight = new Date(req.body.dateOfFlight); 
    flight.logged = req.body.logged;
    flight.comments = req.body.comments;
    flight.usersFollowing = req.body.usersFollowing;
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deleteFlight(req, res) {
  try {
    await Flight.findOneAndDelete({ _id: req.params.id });
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
  }
}

async function follow(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.usersFollowing.push(req.user._id);
    await flight.save();
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}