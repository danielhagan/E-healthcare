const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const timeSlotSchema = mongoose.Schema({
	time: { type: String, required: true },
	status: { type: Number, default: 0 },
});

let TimeSlot = mongoose.model("TimeSlot", timeSlotSchema);
TimeSlot.exists({ time: "M" }).then((result) => {
	if (!result) {
		TimeSlot.insertMany([{}])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = TimeSlot;
