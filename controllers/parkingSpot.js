const parkingLotService = require("../services/parkingSpot");

const getAllParkingSpots = async (req, res) => {
	const data = await parkingLotService.getAllParkingSpots();
	res.json(data);
};
const addParkingSpots = async (req, res) => {
	try {
		const { parkingSpots } = req.body;
		const finalData = parkingSpots.map((item) => {
			return {
				...item,
			};
		});
		const { message } = await parkingLotService.addParkingSpots(finalData);
		res.status(201).json({ message });
	} catch (error) {
		console.error(error.message);
		return res.status(400).json({ message: error.message });
	}
};
const modifyParkingSpots = async (req, res) => {};

module.exports = { getAllParkingSpots, modifyParkingSpots, addParkingSpots };
