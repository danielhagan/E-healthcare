const express = require("express");
const blockedDatesController = require("../controllers/blockedDatesController");
const router = express.Router();

router.get("/:id", blockedDatesController.getBlockedDates);

module.exports = router;
