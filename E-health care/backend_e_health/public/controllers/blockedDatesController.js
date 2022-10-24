const BlockedTime = require("../models/blockedTimes");

exports.getBlockedDates = async (req, res) => {
	try {
		const blockedDates = await BlockedTime.find({
			doctor: req.params.id,
		}).populate(["doctor"]);

		res.status(200).json({
			status: "success",
			blockedDates,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
