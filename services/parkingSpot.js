const crypto = require("crypto");
const { parkingSpotData } = require("../data/parkingSpot");
const { floorsData } = require("../data/floors");

const getAllParkingSpots = async () => {
	const allParkingData = await parkingSpotData;
	return allParkingData;
};
const addParkingSpots = async (parkingSpots) => {
	try {
		const floorCountMap = {};
		const filteredData = [];

		floorsData.forEach((el) => {
			floorCountMap[`${el._id}`] = el.maxCapacity - el.capacity;
		});

		parkingSpots.forEach((item) => {
			if (floorCountMap[`${item.floorId}`] > 0) {
				floorCountMap[`${item.floorId}`] -= 1;
				filteredData.push(item);
			}
		});

		const dataWithId = filteredData.map((item) => {
			const _id = crypto.randomBytes(16).toString("hex");
			return { _id, createdAt: new Date(), ...item };
		});

		Object.entries(floorCountMap).forEach(([k, v]) => {
			const floor = floorsData.find((el) => k === el._id);
			if (!floor) throw new Error("Invalid floor id added");
			floor.capacity = floor.maxCapacity - v;
		});

		await parkingSpotData.push(...dataWithId);

		return {
			message: `${filteredData.length} out of ${parkingSpots.length} parking spots added successfully`,
		};
	} catch (error) {
		return error;
	}
};

module.exports = { getAllParkingSpots, addParkingSpots };
