const Category = require("../models/categoryModel");
const Doctor = require("../models/doctorModel");

exports.getCategories = async (req, res) => {
	try {
		const categories = await Category.find({});

		res.status(200).json({
			status: "success",
			categories,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
