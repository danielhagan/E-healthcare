const AppError = require("./AppError");
module.exports = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch(next);
	};
	// return (req, res, next) => {
	// 	next();
	// 	fn = (req, res, next).catch((err) => next(AppError(err)));
	// };
};
