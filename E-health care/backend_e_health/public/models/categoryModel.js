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
				name: "π¦΄ Bone",
				id: "1",
			},
			{
				name: " π Heart",
			},
			{
				name: "ποΈ Eye",
			},
			{
				name: "π¦· Tooth",
			},
			{
				name: "β‘Liver",
			},

			{
				name: "π Kidney",
			},
			{
				name: "π±ββοΈ Hair",
			},
			{
				name: "πββοΈ Health",
			},
		])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Category;
