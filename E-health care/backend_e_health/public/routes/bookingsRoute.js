const express = require("express");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

/**
 * Bookings CRUD
 */

router.route("/").post(bookingController.bookAppointment);
router
	.route("/:id")
	.patch(bookingController.updateAppointment)
	.get(bookingController.cancellAppointment);

/**
 * patient bookings routes
 */
router.get("/patient/:id/active", bookingController.getPatientActiveBookings);
router.get("/patient/:id/past", bookingController.getPatientPastBookings);
router.get(
	"/patient/:id/cancelled",
	bookingController.getPatientCancelledBookings
);

/**
 * doctors bookings routes
 */

router.get("/doctor/:id/active", bookingController.getDoctorActiveBookings);
router.get("/doctor/:id/past", bookingController.getDoctorPastBookings);
router.get(
	"/doctor/:id/cancelled",
	bookingController.getPatientCancelledBookings
);
module.exports = router;
