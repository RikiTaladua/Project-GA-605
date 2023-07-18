const Pilot = require("../models/pilot");
const Flight = require("../models/flight");

module.exports = {
  newPilot,
  create,
  addPilot,
  show,
  edit,
  update,
  deletePilot,
  removePilot,
};

function newPilot(req, res) {
  res.render("pilots/new");
}

async function create(req, res) {
  try {
    const newPilot = await Pilot.create(req.body);
    res.redirect("/pilot");
  } catch (err) {
    console.log(err);
  }
}

async function addPilot(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.pilots.push(req.body.pilotId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
  }
}

async function show(req, res) {
  try {
    const pilotsFlights = await Flight.find({ pilots: req.params.id });
    const pilot = await Pilot.findById(req.params.id);
    res.render("pilot/show", { pilot, pilotsFlights });
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
    await pilot.save();
    res.redirect(`/pilots/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}

async function deletePilot(req, res) {
  try {
    await Pilot.findByIdAndDelete(req.params.id);
    const pilotsFlights = await Flight.find({ pilots: req.params.id });
    for (const flight of pilotsFlights) {
      flight.pilots.remove(req.params.id);
      await flight.save();
    }
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
  }
}

async function removePilot(req, res) {
  try {
    const flight = await Flight.findById(req.params.podid);
    flight.pilots.remove(req.params.hid);
    await flight.save();
    res.redirect(`/flights/${req.params.podid}`);
  } catch (err) {
    console.log(err);
  }
}
