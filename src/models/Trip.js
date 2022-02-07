const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
	startPoint: {
		type: String,
		required: true,
		minlength: [4, "Starting point should be at least 4 characters long"],
	},
	endPoint: {
		type: String,
		required: true,
		minlength: [4, "Ending point should be at least 4 characters long"],
	},
	date: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	carBrand: {
		type: String,
		required: true,
		minlength: [4, "The car brand needs to be at least 4 characters long"],
	},
	seats: {
		type: Number,
		required: true,
		min: [0, "There cannot be less than 0 seats"],
		max: [4, "There cannot be more than 4 seats"],
	},
	price: {
		type: Number,
		required: true,
		min: [1, "The price cannot be less than 1"],
		max: [50, "The price cannot be more than 50"],
	},
	description: {
		type: String,
		required: true,
		minlength: [10, "The description needs to be at least 10 characters long"],
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	buddies: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

tripSchema.method("availableSeats", function () {
	return this.seats - this.buddies.length;
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
