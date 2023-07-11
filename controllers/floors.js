const floorsService = require("../services/floors");

const getAllFloors = async (req, res) => {
	const data = await floorsService.getAllFloors();
	res.json(data);
};
const addFloor = async (req, res) => {
	const floor = req.body;
	const { message } = await floorsService.addFloor(floor);
	res.status(201).json({ message });
};
const modifyParkingSpots = async (req, res) => {};

module.exports = { getAllFloors, addFloor };
