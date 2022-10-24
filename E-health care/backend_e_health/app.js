const express = require("express");
const bodyparser = require("body-parser");
const cookies = require("cookie-parser");
const xclean = require("xss-clean");
const hpp = require("hpp");
const morgan = require("morgan");
const cors = require("cors");
//passport controller
const globalErrorHandler = require("./public/utils/errorController");
const userRouter = require("./public/Routes/userRoute");
const categoryRouter = require("./public/Routes/categoriesRoute");
const doctorRouter = require("./public/Routes/doctorsRoute");
const bookingRouter = require("./public/Routes/bookingsRoute");
const blockedDateRouter = require("./public/Routes/blockedDatesRoute");
const conversationRouter = require("./public/routes/conversationRoute");
const messageRouter = require("./public/routes/messageRoute");

const app = express();
app.use(cors({ origin: true, credentials: true }));
const session = {
	secret: "someSecret",
	cookie: {},
	resave: false,
	saveUninitialized: false,
};
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(bodyparser.json());
app.use(cookies());
app.use(hpp());
app.use(xclean());

app.use(express.static("public"));
app.use("/api/images", express.static("public/images"));

app.get("/api", (req, res) => {
	res.send("hello i am hosted");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/blocked_dates", blockedDateRouter);
app.use("/api/v1/conversations", conversationRouter);
app.use("/api/v1/messages", messageRouter);

// app.use("/api/v1/user-login", userAuthRouter);

//request which are undefined.
app.all("*", (req, res, next) => {
	const url = `${req.originalUrl}`;
	next(new Error("The request at  " + url + " is not defined", 404));
});

//handles all global error
app.use(globalErrorHandler); /// uncomment few seconds later
module.exports = app;
