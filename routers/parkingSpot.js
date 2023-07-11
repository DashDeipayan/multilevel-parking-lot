const express = require("express");
const {
	getAllParkingSpots,
	addParkingSpots,
} = require("../controllers/parkingSpot");
const {
	validParkingSpotBody,
} = require("../middlewares/validators/parkingSpots");

const router = express.Router();

router.get("/", getAllParkingSpots);
router.post("/", validParkingSpotBody, addParkingSpots);

module.exports = router;
