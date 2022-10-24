const Conversation = require("../models/conversationModel");

//post message
exports.findMemberInvolved = async (req, res) => {
	try {
		const conversation = await Conversation.find({
			members: { $in: req.params.id },
		});

		res.status(200).json({
			status: "success",
			conversation,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
};
//get
exports.createConversation = async (req, res) => {
	try {
		const newMessage = await Conversation.create({
			members: [req.body.sender, req.body.reciever],
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
