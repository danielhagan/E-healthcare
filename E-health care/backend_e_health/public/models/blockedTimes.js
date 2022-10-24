const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const blockedTimeSchema = mongoose.Schema({
	dates: [{ date: String }],
	id: { type: String },
	doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

let BlockedTime = mongoose.model("BlockedTime", blockedTimeSchema);
BlockedTime.exists({ id: "1" }).then((result) => {
	if (!result) {
		BlockedTime.insertMany([
			{
				dates: [
					{ date: "2022-10-29" },
					{ date: "2022-11-3" },
					{ date: "2022-10-20" },
				],
				id: "1",
				doctor: "63480a98d65d5573980a4b5f",
			},
			{
				dates: [{ date: "2022-11-1" }, { date: "2022-11-11" }],

				doctor: "6348074249634157a023821e",
			},
			{
				dates: [
					{ date: "2022-12-10" },
					{ date: "2022-11-2" },
					{ date: "2022-12-25" },
					{ date: "2022-12-26" },
				],

				doctor: "6348074249634157a023821d",
			},
		])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = BlockedTime;
