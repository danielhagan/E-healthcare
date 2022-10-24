const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
	patient: { type: mongoose.Schema.Types.ObjectId },
	favoriteDoctors: [{ id: mongoose.Schema.Types.ObjectId }],
});

let Patient = mongoose.model("Patient", patientSchema);
Patient.exists({ time: "M" }).then((result) => {
	if (!result) {
		Patient.insertMany([{}])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Patient;
