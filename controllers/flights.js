//Require models 
const Flight = require("../models/flight");
const Pilot = require("../models/pilot");



//Export functions
module.exports = {
  index,
  new: newFlight,
  create,

  show,
  edit,
  update,
  delete: deleteFlight,
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

async function create(req, res) {
  try {


    //req.body contains all the information except for logged which is a 
    req.body.logged = !!req.body.logged;


    //now creating new flight entry in db
    //then redirect to flight index to see new entry in the list
    const flight = await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {


    //Find the flight for the show page and the comment to pass into res.render
    const flight = await Flight.findById(req.params.id)
      .populate("pilots")
      .exec();
    const comment = flight.comment;
    const pilots = await Pilot.find({ _id: { $nin: flight.pilots } });
    
    
    //Render the show page:
    res.render("flights/show", { flight, comment, pilots });
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    
    
    //Find flight to pass into the edit form
    const flight = await Flight.findById(req.params.id);
    res.render("flights/edit", { flight });
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  req.body.new = !!req.body.new;
  try {
    const flight = await Flight.findById(req.params.id);
    flight.pilot = req.body.pilot;
    flight.description = req.body.description;
    flight.plane = req.body.plane;
    flight.from = req.body.from
    flight.to = req.body.to;
    flight.dateOfFlight = req.body.dateOfFlight;
    flight.logged = req.body.logged;
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