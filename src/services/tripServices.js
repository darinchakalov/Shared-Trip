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

const tripServices = {
	create,
	getAll,
	getOne,
};

module.exports = tripServices;
