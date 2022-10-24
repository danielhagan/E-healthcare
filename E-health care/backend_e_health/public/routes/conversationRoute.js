const express = require("express");
const conversationControllerController = require("../controllers/conversationController");
const router = express.Router();

router.post("/", conversationControllerController.createConversation);
router.get("/:id", conversationControllerController.findMemberInvolved);

module.exports = router;
