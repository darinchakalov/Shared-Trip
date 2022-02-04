const Trip = require("../models/Trip.js");

const create = function (startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator) {
	return Trip.create({ startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator });
};

const getAll = function () {
	return Trip.find().lean();
};

const getOne = function (id) {
	return Trip.findById(id);
};

const bookSeat = async function (tripId, userId) {
	try {
		let trip = await Trip.findById(tripId);
		trip.buddies.push(userId);
		return trip.save();
	} catch (error) {
		return error;
	}
};

const tripServices = {
	create,
	getAll,
	getOne,
	bookSeat,
};

module.exports = tripServices;
