const { constants } = require("../constants");

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Resources Not Found",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        default:
            console.info("No Errors! All Good!");
            break;
    }
};

module.exports = { errorHandler };