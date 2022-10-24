const Message = require("../models/messageModel");

//post message
exports.postMessage = async (req, res) => {
	try {
		const newMessage = await Message.create(req.body);

		res.status(200).json({
			status: "success",
			newMessage,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
//get
exports.getConversation = async (req, res) => {
	try {
		const newMessage = await Message.find({
			conversationId: req.params.conversationId,
		});

		res.status(200).json({
			status: "success",
			newMessage,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
