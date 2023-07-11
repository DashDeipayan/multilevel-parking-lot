const joi = require("joi");
const { parkingSpotTypes } = require("../../constants/parkingSpot");

const validParkingSpotBody = async (req, res, next) => {
	const schema = joi.object({
		parkingSpots: joi.array().items(
			joi.object({
				type: joi
					.number()
					.custom((value, helper) => {
						if (!parkingSpotTypes.hasOwnProperty(value))
							return helper.message("Not a valid parking type!:", value);
						return value;
					})
					.required(),
				x: joi.number().required(),
				y: joi.number().required(),
				floorId: joi.string().required(),
				vacant: joi.boolean().required(),
			})
		),
	});

	try {
		await schema.validateAsync(req.body);
		next();
	} catch (error) {
		return res.status(400).json({ message: error.details[0].message });
	}
};

module.exports = { validParkingSpotBody };
