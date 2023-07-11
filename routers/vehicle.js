const express = require("express");
const {
	getAllVehicles,
	addVehicle,
	removeVehicle,
	getAllExpiredVehicles,
} = require("../controllers/vehicle");

const router = express.Router();

router.get("/", getAllVehicles);
router.get("/expired", getAllExpiredVehicles);
router.post("/", addVehicle);
router.post("/:id", removeVehicle);

module.exports = router;
