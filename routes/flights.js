const express = require("express");
const router = express.Router();
const flightsRouter = require("../controllers/flights");

// Routing to home/flights page
// Every route has prepended file path "/flights"
router.get("/", flightsRouter.index);

// Form to make a new flight entry
router.get("/new", flightsRouter.newFlight);

// Form to update the flight details
router.get("/:id/edit", flightsRouter.edit);

// Add user as a follower
router.put("/:id/follow", flightsRouter.follow);

// Create new flight in db
router.post("/", flightsRouter.create);

// Specific flight page
router.get("/:id", flightsRouter.show);

// Update flight
router.put("/:id", flightsRouter.update);

// Delete flight
router.delete("/:id", flightsRouter.deleteFlight);

module.exports = router;
