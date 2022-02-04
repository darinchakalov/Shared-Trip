const router = require("express").Router();

const renderHomePage = (req, res) => {
	res.render("home");
};

router.get("/", renderHomePage);

module.exports = router;
