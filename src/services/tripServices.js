const Trip = require("../models/Trip.js");

const create = function (startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator) {
	return Trip.create({ startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator });
};

const getAll = function () {
	return Trip.find().lean();
};

const getOne = function (id) {
	return Trip.findById(id).populate("buddies");
};

const book = async function (tripId, userId) {
	try {
		let trip = await Trip.findById(tripId).lean();
		trip.buddies.push(userId);
		return trip.save();
	} catch (error) {
		return error;
	}
};

const edit = function (tripId, trip) {
	return Trip.findByIdAndUpdate(tripId, trip);
};

const del = function (tripId) {
	return Trip.findByIdAndDelete(tripId);
};

const getUserTrips = function (userId) {
	return Trip.find({ creator: userId }).lean();
};

const tripServices = {
	create,
	getAll,
	getOne,
	book,
	edit,
	del,
	getUserTrips,
};

module.exports = tripServices;
