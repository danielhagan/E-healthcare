const catchAsync = require("../utils/CatchAsync");
const Booking = require("./..//models/bookingModel");

/**
 * Bookings CRUD
 */

//book an appointment
exports.bookAppointment = catchAsync(async (req, res, next) => {
	const { patientId, doctorsId, date, timeSlot } = req.body;

	const appointment = await Booking.create({
		doctor: doctorsId,
		patient: patientId,
		date,
		timeSlot,
	});

	res.status(201).json({
		status: "success",
		appointment,
	});
});

//update and appointment bookings
exports.updateAppointment = catchAsync(async (req, res, next) => {
	const { patientId, doctorsId, date, timeSlot } = req.body;
	const appointmentId = req.params.id;

	const appointment = await Booking.findByIdAndUpdate(appointmentId, {
		doctor: doctorsId,
		patient: patientId,
		date,
		timeSlot,
	});

	res.status(201).json({
		status: "success",
		appointment,
	});
});

//cancell an appointment
exports.cancellAppointment = catchAsync(async (req, res, next) => {
	const appointmentId = req.params.id;
	const appointment = await Booking.findByIdAndUpdate(appointmentId, {
		status: 2,
	});

	res.status(201).json({
		status: "success",
		appointment,
	});
});

/**
 * Patients Boookings
 */

//get patients active bookings
exports.getPatientActiveBookings = catchAsync(async (req, res, next) => {
	const patientId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${patientId}` },
		status: 0,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});

//get patients past bookings
exports.getPatientPastBookings = catchAsync(async (req, res, next) => {
	const patientId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${patientId}` },
		status: 1,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});

//get patient cancelled bookings
exports.getPatientCancelledBookings = catchAsync(async (req, res, next) => {
	const patientId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${patientId}` },
		status: 2,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});

/**
 * Doctors Bookings
 */

//get doctors boookings
exports.getDoctorActiveBookings = catchAsync(async (req, res, next) => {
	const doctorsId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${doctorsId}` },
		status: 0,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});

//get doctor's past bookings(history)
exports.getDoctorPastBookings = catchAsync(async (req, res, next) => {
	const doctorsId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${doctorsId}` },
		status: 1,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});

//get doctor's cancelled bookings
exports.getDoctorCancelledBookings = catchAsync(async (req, res, next) => {
	const doctorsId = req.params.id;
	const bookings = await Booking.find({
		patient: { _id: `${doctorsId}` },
		status: 2,
	}).populate(["doctor", "patient"]);

	res.status(201).json({
		status: "success",
		bookings: bookings,
	});
});
