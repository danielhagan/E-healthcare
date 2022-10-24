const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	city: { type: String },
	contact: { type: String },
	email: { type: String, required: true, unique: true },
	type: {
		type: String,
		enum: ["patient", "doctor", "admin", "superAdmin"],
		default: "patient",
	},
	password: { type: String, required: true, min: 8, select: false },
	passwordConfirm: { type: String, required: true, min: 8, select: false },
	passwordChangedAt: {
		type: Date,
		default: null,
	},
	passwordResetToken: { type: String, default: null },
	passwordExpiresAt: { type: Date, default: null },
	image: { type: String },
	doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, // remember to put doctors id
	patiendId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" }, // remember to put patient id
});
userSchema.plugin(uniqueValidator);

userSchema.pre("save", async function (next) {
	// console.log("on pre save");
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 12);
	// this.passwordConfirm = undefined;
	next();
});
userSchema.methods.correctPassword = async (canPass, userPass) => {
	return await bcrypt.compare(canPass, userPass);
};

userSchema.methods.passwordChanged = async (jwtTimeStamp) => {
	if (this.passwordChangedAt) {
		const pwdChangeAtTime = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);

		return pwdChangeAtTime > jwtTimeStamp;
	}

	return false;
};

let User = mongoose.model("User", userSchema);
User.exists({ email: "Admin@gmail.com" }).then((result) => {
	if (!result) {
		User.insertMany([
			{
				firstName: "Michael",
				lastName: "Narh",
				email: "Admin@gmail.com",
				password: `$2a$12$1ncp/8WGWxXp4L9f9yEff.AlSdTtPVDst34Uwom6CP7Te7t.LEKyO`,
				passwordConfirm: `$2a$12$1ncp/8WGWxXp4L9f9yEff.AlSdTtPVDst34Uwom6CP7Te7t.LEKyO`,
				type: "admin",
			},
			{
				firstName: "Daniel",
				lastName: "Kolenda",
				email: "danielkolenda@gmail.com",
				password: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6`,
				passwordConfirm: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6
				`,
				type: "patient",
			},
			{
				firstName: "Jenny",
				lastName: "Wilson",
				email: "jennywilson@gmail.com",
				password: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6`,
				passwordConfirm: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6
				`,
				type: "doctor",
			},
			{
				firstName: "Pinto",
				lastName: "Theophilus",
				email: "pintotheophilus@gmail.com",
				password: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6`,
				passwordConfirm: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6
				`,
				type: "doctor",
			},
			{
				firstName: "Bridget",
				lastName: "Owusu",
				email: "bridgetowusu@gmail.com",
				password: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6`,
				passwordConfirm: `$2a$12$2SYZIsURiQv0G6ed66TnI.Y/BZEAoJEtQr2er1sKAptjBxs2aq7Q6
				`,
				type: "doctor",
			},
		])
			.then({})
			.catch((e) => {
				console.log(e);
			});
	}
});
module.exports = User;
