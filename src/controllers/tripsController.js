const router = require("express").Router();

const renderSharedTripsPage = (req, res) => {
	res.render("shared-trips");
};

const renderOfferPage = (req, res) => {
	res.render("offer");
};

router.get("/shared-trips", renderSharedTripsPage);
router.get("/offer", renderOfferPage);

module.exports = router;
