const homeController = require("../controllers/homeController.js");
const authController = require("../controllers/authController.js");
const nonExistingController = require("../controllers/nonExistingController.js");
const tripsController = require("../controllers/tripsController.js");
const profileController = require("../controllers/profileController.js");

module.exports = (app) => {
	app.use(homeController);
	app.use(authController);
	app.use(tripsController);
	app.use(profileController);
	app.use(nonExistingController);
};
