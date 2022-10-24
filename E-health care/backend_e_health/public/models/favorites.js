const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
	patientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

let Favorite = mongoose.model("Favorite", favoriteSchema);
e.exports = Favorite;
