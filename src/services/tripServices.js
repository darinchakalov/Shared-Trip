const Trip = require("../models/Trip.js");

const create = function (startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator) {
	return Trip.create({ startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description, creator });
};

const getAll = function () {
	return Trip.find();
};

const tripServices = {
	create,
	getAll,
};

module.exports = tripServices;
