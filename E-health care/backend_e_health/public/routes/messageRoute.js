const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.post("/", messageController.postMessage);
router.get("/:conversationId", messageController.getConversation);

module.exports = router;
