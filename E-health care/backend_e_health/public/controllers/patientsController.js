const User = require("../models/userModel");
const Patient = require("../models/patientsTable");

exports.getAllPatients = async (req, res) => {
	try {
		const patients = await User.find({ type: "patient" }).populate([
			"patientId",
		]);

		const users = patients.toObject();

		delete users.password;
		delete users.passwordConfirm;
		res.status(201).json({
			status: "success",
			doctors: users,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
exports.getPaient = async (req, res) => {
	try {
		const patients = await User.findById(req.params.id);

		const docDetails = await Patient.find({ patient: patients._id });

		const user = patients.toObject();
		delete user.password;
		delete user.passwordConfirm;

		let mergedoc = { ...user, ...docDetails };
		res.status(201).json({
			status: "success",
			patients: mergedoc,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

exports.bookAppointment = async (req, res) => {
	try {
		res.status(201).json({
			status: "success",
			patients: mergedoc,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
