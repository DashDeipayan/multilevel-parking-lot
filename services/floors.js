const crypto = require("crypto");
const { floorsData } = require("../data/floors");

const getAllFloors = async () => {
	const getAllFloors = await floorsData;
	return getAllFloors;
};
const addFloor = async (floorData) => {
	try {
		if (floorsData.find((item) => item === floorData.floorNumber))
			throw new Error("Floor number already exists");
		floorData._id = crypto.randomBytes(16).toString("hex");
		floorData.createdAt = new Date();
		await floorsData.push(floorData);
		return { message: "Floor added successfully" };
	} catch (error) {
		throw error;
	}
};

module.exports = { getAllFloors, addFloor };
