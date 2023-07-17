// 
// const express = require("express");
// const router = express.Router();
// const pilotsCtrl = require("../controllers/pilot");

// // Pilots routes are all prepended with "/pilots"
// router.get("/new", pilotsCtrl.newPilot);
// router.post("/", pilotsCtrl.create);
// router.post("/flights/:id/pilots", pilotsCtrl.addPilot);
// router.get("/:id", pilotsCtrl.show);
// router.delete("/:id", pilotsCtrl.deletePilot);
// router.get("/:id/edit", pilotsCtrl.edit);
// router.put("/:id", pilotsCtrl.update);
// router.delete("/flights/:podid/pilots/:hid", pilotsCtrl.removePilot);

// module.exports = router;
const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights"); // Corrected import path for flightsCtrl

// Routing to home/flights page
// Every route has prepended file path "/flights"
router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.newFlight);
router.get("/:id/edit", flightsCtrl.edit);
router.put("/:id/follow", flightsCtrl.follow);
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);
router.put("/:id", flightsCtrl.update);
router.delete("/:id", flightsCtrl.deleteFlight);

module.exports = router;

