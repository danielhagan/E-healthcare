const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");

exports.getAllDoctors = async (req, res) => {
	try {
		const doctors = await Doctor.find({}).populate(["doctor", "category"]);

		res.status(200).json({
			status: "success",
			doctors,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
exports.getDoctor = async (req, res) => {
	try {
		// const doctor = await User.findById(req.params.id);

		// const docDetails = await Doctor.find({ doctor: doctor._id });

		// const user = doctor.toObject();
		// delete user.password;
		// delete user.passwordConfirm;

		// let mergedoc = { ...user, ...docDetails };

		// res.cookie("jwt", token, cookieOptions);
		res.status(201).json({
			status: "success",
			// doc: mergedoc,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};

// //update info on a doctor
// exports.updateDoctor = async (req, res) => {
// 	if (!req.params.id) {
// 		throw Error("Zone  not identified");
// 	}
// 	try {
// 		const zone = await Zone.findByIdAndUpdate(req.params.id, req.body, {
// 			runValidator: true,
// 			new: true,
// 		});
// 		res.status(201).json({
// 			status: "success",
// 			zone,
// 		});
// 	} catch (err) {
// 		res.status(400).json({
// 			status: "failed",
// 			message: err.message,
// 		});
// 	}
// };
