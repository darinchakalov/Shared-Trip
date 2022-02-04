const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

const { SECRET } = require("../config/constants.js");

const register = function (email, password, gender) {
	return User.create({ email, password, gender });
};

const login = async function (email, password) {
	try {
		let user = await User.findOne({ email: email });
		let isPasswordCorrect = await user.confirmPassword(password);
		if (isPasswordCorrect) {
			return user;
		}
	} catch (error) {
		throw new Error("Email or password are incorrect", error);
	}
};

const userExists = function (email) {
	return User.exists({ email });
};

const createToken = function (user) {
	const payload = {
		id: user._id,
		email: user.email,
	};
	return jwt.sign(payload, SECRET);
};

const authServices = {
	register,
	login,
	userExists,
	createToken,
};

module.exports = authServices;
