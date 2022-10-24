const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema(
	{
		members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	},
	{
		timestamps: true,
	}
);

let Conversation = mongoose.model("Conversation", conversationSchema);
Conversation.exists({ id: "1" }).then((result) => {
	if (!result) {
		Conversation.insertMany([{}])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = Conversation;
