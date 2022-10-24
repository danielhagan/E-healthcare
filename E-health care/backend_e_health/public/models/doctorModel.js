const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const doctorSchema = mongoose.Schema({
	doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	speciality: { type: String },
	description: { type: String },
	feeCharge: { type: Number },
	timeSlots: {
		morning: [{ time: String, status: Number }], //status 0->active
		evening: [{ time: String, status: Number }],
	},
	rating: { type: String, default: "4.2" },
	// patients:{type:Array,{type:mongoose.Schema.Types.ObjectId, ref:"User"},
	visitingHours: { type: String },
	patientTotal: { type: String, default: 12 },
});

let Doctor = mongoose.model("Doctor", doctorSchema);
Doctor.exists({ doctor: "63480a98d65d5573980a4b5f" }).then((result) => {
	if (!result) {
		Doctor.insertMany([
			{
				doctor: "63480a98d65d5573980a4b5f",
				category: "63488a6a6eec6fb360ccb24d",
				speciality: "Heart Surgeon",
				description:
					"The goal is to set people free from any infirmity on their heart and save as many lives as possible. Worked for over ten years and will be able to attend to demands of request",
				feeCharge: 500,
				patientTotal: "250",
				rating: "4.4",
				visitingHours: "7:30AM - 10:30PM",
				timeSlots: {
					morning: [
						{ time: "7:30am - 8:30am", status: 1 },
						{ time: "8:30am - 9:30am", status: 0 },
						{ time: "9:30am - 10:30am", status: 0 },
						{ time: "10:30am - 11:30am", status: 0 },
					],
					evening: [
						{ time: "3:30pm - 4:30pm", status: 0 },
						{ time: "4:30pm - 5:30pm", status: 1 },
						{ time: "6:30pm - 8:30pm", status: 0 },
						{ time: "9:30pm - 10:30pm", status: 0 },
					],
				},
			},
			{
				doctor: "6348074249634157a023821e",
				category: "63488a6a6eec6fb360ccb24f",
				speciality: "Dentist",
				description:
					"The goal is to set people free from any infirmity on their  Tooth and save as many lives as possible. Worked for over seven years and will be able to attend to demands of request",
				feeCharge: 600,
				patientTotal: "1120",
				rating: "4.8",
				visitingHours: "7:30AM - 10:30PM",
				timeSlots: {
					morning: [
						{ time: "7:00am - 8:00am", status: 0 },
						{ time: "8:00am - 9:00am", status: 0 },
						{ time: "9:00am - 10:00am", status: 0 },
						{ time: "10:00am - 11:00am", status: 0 },
					],
					evening: [
						{ time: "3:00pm - 4:00pm", status: 0 },
						{ time: "4:00pm - 5:00pm", status: 0 },
						{ time: "6:00pm - 8:00pm", status: 0 },
						{ time: "9:30pm - 10:30pm", status: 1 },
					],
				},
			},
			{
				doctor: "6348074249634157a023821c",
				category: "63488a6a6eec6fb360ccb24c",
				speciality: "Bone Specialist",
				description:
					"Bones are very essential part of the human body to save a life our bones and muscles must work effectivel. Worked for over twelve years and will be able to attend to demands of request",
				feeCharge: 400,
				patientTotal: "200",
				rating: "4.2",
				visitingHours: "7:00AM - 10:00PM",
				timeSlots: {
					morning: [
						{ time: "7:00am - 8:00am", status: 0 },
						{ time: "8:00am - 9:00am", status: 0 },
						{ time: "9:00am - 10:00am", status: 0 },
						{ time: "10:00am - 11:00am", status: 0 },
					],
					evening: [
						{ time: "3:00pm - 4:00pm", status: 1 },
						{ time: "4:00pm - 5:00pm", status: 0 },
						{ time: "6:00pm - 8:00pm", status: 0 },
						{ time: "9:00pm - 10:00pm", status: 0 },
					],
				},
			},
		])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Doctor;
