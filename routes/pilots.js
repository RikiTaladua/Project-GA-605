// module.exports = router;
const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights"); // Corrected import path for flightsCtrl
const pilotsCtrl = require("../controllers/pilot"); // Corrected import path for flightsCtrl
// Routing to home/flights page
// Every route has prepended file path "/flights"
router.get("/", flightsCtrl.index);
router.get("/pilot/new", pilotsCtrl.newPilot);
router.get("/:id/edit", flightsCtrl.edit);
router.put("/:id/follow", flightsCtrl.follow);
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);
router.put("/:id", flightsCtrl.update);
router.delete("/:id", flightsCtrl.deleteFlight);

module.exports = router;

