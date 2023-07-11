const crypto = require("crypto");
let { vehiclesData } = require("../data/vehicle");
let { parkingSpotData } = require("../data/parkingSpot");
let { expiredVehiclesData } = require("../data/expiredVehicles");

const getAllVehicles = async () => {
	const getAllVehicles = await vehiclesData;
	return getAllVehicles;
};
const getAllExpiredVehicles = async () => {
	const getAllExpiredVehicles = await expiredVehiclesData;
	return getAllExpiredVehicles;
};
const addIncomingVehicle = async (data) => {
	const emptyLot = parkingSpotData.find(
		(item) => item.vacant === true && item.type >= data.type
	);
	emptyLot.vacant = false;
	data._id = crypto.randomBytes(16).toString("hex");
	await vehiclesData.push({
		...data,
		date: new Date(),
		parkingSpotId: emptyLot._id,
		floorId: emptyLot.floorId,
	});
	return { message: "Vehicle added successfully" };
};
const removeVehicle = async (vehicleId) => {
	const currentVehicleData = vehiclesData.find(
		(item) => item._id === vehicleId
	);
	const vehicleLot = parkingSpotData.find(
		(item) => item._id === currentVehicleData.parkingSpotId
	);
	vehicleLot.vacant = true;
	expiredVehiclesData.push(currentVehicleData);
	vehiclesData = await vehiclesData.filter((item) => item._id !== vehicleId);
	return { message: "Vehicle removed successfully" };
};

module.exports = {
	addIncomingVehicle,
	getAllVehicles,
	removeVehicle,
	getAllExpiredVehicles,
};
