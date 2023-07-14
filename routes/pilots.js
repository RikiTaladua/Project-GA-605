const express = require("express");
const router = express.Router();
const pilotsCtrl =  require("../controllers/pilot");

//Pilots routes are all prepended with "/pilots"
router.get("/pilots/new", pilotsCtrl.new);


//Adds new pilot to db
router.post("/pilots", pilotsCtrl.create);


//Adds pilot to flight // Adds a flightt to pilot
router.post("/flights/:id/pilots", pilotsCtrl.addPilot);


//Pilot details
router.get("/pilots/:id", pilotsCtrl.show);


//Delete pilot
router.delete("/pilots/:id", pilotsCtrl.delete);


//Edit page for pilot
router.get("/pilots/:id/edit", pilotsCtrl.edit);


//Update the pilot info
router.put("/pilots/:id", pilotsCtrl.update);


//Delete connection between pilot and flight
router.delete("/flights/:podid/pilots/:hid", pilotsCtrl.removePilot);

module.exports = router;