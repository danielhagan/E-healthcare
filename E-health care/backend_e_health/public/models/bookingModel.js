const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
	{
		doctor: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			// required: true,
		},
		patient: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			// required: true,
		},
		status: { type: Number, default: 0 }, // 0 -> current / 1-> past / 2 ->cancelled
		date: { type: String },
		timeSlot: { type: String },
	},
	{
		timestamps: true,
	}
);

let Booking = mongoose.model("Booking", bookingSchema);
Booking.exists({ time: "M" }).then((result) => {
	if (!result) {
		Booking.insertMany([{}])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Booking;
