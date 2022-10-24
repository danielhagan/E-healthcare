const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
	name: { type: String, required: true },
	id: { type: String },
});

let Category = mongoose.model("Category", categorySchema);
Category.exists({ id: "1" }).then((result) => {
	if (!result) {
		Category.insertMany([
			{
				name: "🦴 Bone",
				id: "1",
			},
			{
				name: " 💖 Heart",
			},
			{
				name: "👁️ Eye",
			},
			{
				name: "🦷 Tooth",
			},
			{
				name: "⚡Liver",
			},

			{
				name: "💞 Kidney",
			},
			{
				name: "👱‍♀️ Hair",
			},
			{
				name: "🏃‍♂️ Health",
			},
		])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Category;
