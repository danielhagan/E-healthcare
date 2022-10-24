const express = require("express");
const authController = require("../Controllers/authController");
const router = express.Router();

router.post("/signup", authController.SignUp);
router.post("/login", authController.LogIn);

router
	.route("/")
	.get(
		authController.protected,
		authController.restrictTo("admin", "superAdmin", "supervisor"),
		authController.getAllUsers
	);
router.route("/:id").get(authController.protected, authController.getUser);
router
	.route("/update/:id")

	.post(
		authController.protected,
		authController.uploadImage,
		authController.resizeImage,
		authController.updateUser
	);

module.exports = router;
