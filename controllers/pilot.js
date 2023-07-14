//require models here
const Pilot = require("../models/pilot");
const Flight = require("../models/flight");

module.exports = {
  new: newPilot,
  create,
  addPilot,
  show,
  edit,
  update,
  delete: deletePilot,
  removePilot,
};

function newPilot(req, res) {

  //Render the page to add a new pilot
  res.render("pilots/new");
}

async function create(req, res) {
  const newPilot = await Pilot.create(req.body);

  //Redirect to flights page
  res.redirect("/flights");
}

//req.params.id = flight id
async function addPilot(req, res) {
  try {

    //Adds the pilot to flight schema
    const flight = await Flight.findById(req.params.id);
    flight.pilots.push(req.body.pilotId);
    flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const pilotsFlights = await Flight.find({ pilots: req.params.id });
    const pilot = await Pilot.findById(req.params.id);
    res.render("pilots/show", { pilot, pilotsFlights });
  } catch (err) {
    console.log(err);
  }
}

async function edit(req, res) {
  try {
    const pilot = await Pilot.findById(req.params.id);
    res.render("pilots/edit", { pilot });
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res) {
  try {
    const pilot = await Pilot.findById(req.params.id);
    pilot.name = req.body.name;
    pilot.plane = req.body.plane;
    pilot.description = req.body.description;
    pilot.save();
    console.log(pilot);
    res.redirect(`/pilots/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deletePilot(req, res) {
  try {


    //Delete pilot document
    const pilot = await Pilot.findOneAndDelete({ _id: req.params.id });


    //Deletes pilot's objectIDs from flights document
    const pilotsFlights = await Flight.find({ pilots: req.params.id });
    pilotsFlights.forEach(function (p) {
      p.pilots.remove(req.params.id);
      p.save();
    });
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
  }
}


//req.params.podid = flight id
//req.params.hid = pilot id
async function removePilot(req, res) {
  try {
    const flight = await Flight.findById(req.params.podid);
    

    //Remove pilot from flight
    flight.pilots.remove(req.params.hid);
    flight.save();
    res.redirect(`/flights/${req.params.podid}`);
  } catch (err) {
    console.log(err);
  }
}