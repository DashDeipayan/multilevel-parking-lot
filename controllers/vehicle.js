const vehiclesService = require("../services/vehicle");

const getAllVehicles = async (req, res) => {
	const data = await vehiclesService.getAllVehicles();
	res.json(data);
};
const addVehicle = async (req, res) => {
	const vehicleData = req.body;
	const { message } = await vehiclesService.addIncomingVehicle(vehicleData);
	res.status(201).json({ message });
};
const removeVehicle = async (req, res) => {
	const vehicleId = req.params.id;
	const { message } = await vehiclesService.removeVehicle(vehicleId);
	res.status(201).json({ message });
};
const getAllExpiredVehicles = async (req, res) => {
	const data = await vehiclesService.getAllExpiredVehicles();
	res.json(data);
};

module.exports = {
	getAllVehicles,
	addVehicle,
	removeVehicle,
	getAllExpiredVehicles,
};
