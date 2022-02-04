const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
	startPoint: {
		type: String,
		required: true,
	},
	endPoint: {
		type: String,
		required: true,
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
	},
	seats: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
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
