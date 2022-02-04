const router = require("express").Router();

const tripServices = require("../services/tripServices.js");

const renderSharedTripsPage = async (req, res) => {
	try {
		let trips = await tripServices.getAll();
		res.render("shared-trips", { trips });
	} catch (error) {
		res.locals.error = error.message;
		res.render("shared-trips");
	}
};

const renderOfferPage = (req, res) => {
	res.render("offer", { title: "Offer" });
};

const createOffer = async (req, res) => {
	let { startPoint, endPoint, date, time, imageUrl, carBrand, seats, price, description } = req.body;

	try {
		await tripServices.create(
			startPoint,
			endPoint,
			date,
			time,
			imageUrl,
			carBrand,
			seats,
			price,
			description,
			res.user.id
		);
		res.redirect("/shared-trips");
	} catch (error) {
		res.locals.error = error;
		res.render("offer");
	}
};

router.get("/shared-trips", renderSharedTripsPage);
router.get("/offer", renderOfferPage);
router.post("/offer", createOffer);

module.exports = router;
