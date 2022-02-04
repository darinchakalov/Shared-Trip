const router = require("express").Router();

const tripServices = require("../services/tripServices.js");

const renderProfilePage = async (req, res) => {
	try {
		let trips = await tripServices.getUserTrips(res.user.id);
		let tripsCount = trips.length;
		console.log(tripsCount);
		res.render("profile", { trips, tripsCount });
	} catch (error) {
		res.locals.error = error.message;
		res.render("profile");
	}
};

router.get("/profile", renderProfilePage);

module.exports = router;
