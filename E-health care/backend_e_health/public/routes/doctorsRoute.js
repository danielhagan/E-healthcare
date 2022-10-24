const express = require("express");
const doctorsController = require("../controllers/doctorsController");
const router = express.Router();

router.get("/", doctorsController.getAllDoctors);
router.get("/:id", doctorsController.getDoctor);

module.exports = router;
