const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

//routing to home page
//every route has prepended file path "/flights"
router.get("/", flightsCtrl.index);


//Get form to make a new flight 
router.get("/new", flightsCtrl.new);


//To a form to upate the flight details
router.get("/:id/edit", flightsCtrl.edit);


//Add user as a follower
router.put("/:id/follow", flightsCtrl.follow);


//Create new flight in db
router.post("/", flightsCtrl.create);


//Specific flight page
router.get("/:id", flightsCtrl.show);


//Update flight
router.put("/:id", flightsCtrl.update);


//Delete flight 
router.delete("/:id", flightsCtrl.delete);


module.exports = router;