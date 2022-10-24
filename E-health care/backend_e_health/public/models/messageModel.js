const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		conversationId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Conversation",
		},
		sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		message: { type: String },
	},
	{
		timestamps: true,
	}
);

let Message = mongoose.model("Message", messageSchema);
Message.exists({ id: "1" }).then((result) => {
	if (!result) {
		Message.insertMany([])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Message;
