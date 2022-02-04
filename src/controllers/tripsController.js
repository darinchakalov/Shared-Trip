const router = require("express").Router();

const tripServices = require("../services/tripServices.js");
const authServices = require("../services/authServices.js");

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
		res.locals.error = error.message;
		res.render("offer");
	}
};

const renderDetailsPage = async (req, res) => {
	try {
		let tripData = await tripServices.getOne(req.params.id);
		let trip = tripData.toObject();
		let isCreator = trip.creator == res.user?.id;
		let availableSeats = tripData.availableSeats();
		let hasBooked = tripData.buddies.some((x) => x._id == res.user?.id);
		const driver = await authServices.getUser(trip.creator);
		let allBuddies = trip.buddies.map((x) => x.email);
		console.log(allBuddies);
		res.render("details", { ...trip, isCreator, availableSeats, hasBooked, driver, allBuddies });
	} catch (error) {
		res.locals.error = error.message;
		res.render("details");
	}
};

const bookSeat = async (req, res) => {
	console.log("yes");
	try {
		await tripServices.book(req.params.id, res.user.id);
		res.redirect(`/details/${req.params.id}`);
	} catch (error) {
		res.locals.error = error.message;
		res.render("details");
	}
};

router.get("/shared-trips", renderSharedTripsPage);
router.get("/offer", renderOfferPage);
router.post("/offer", createOffer);
router.get("/details/:id", renderDetailsPage);
router.get("/book/:id", bookSeat);

module.exports = router;
