// Error handling middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Error",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case 401:
            res.json({
                title: "Unauthorized",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case 403:
            res.json({
                title: "Forbidden",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        case 404:
            res.json({
                title: "Resources Not Found",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;

        default:
            console.error(err);
            res.json({
                title: "Server Error",
                status: statusCode,
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack,
            });
            break;
    }
};

module.exports = { errorHandler };