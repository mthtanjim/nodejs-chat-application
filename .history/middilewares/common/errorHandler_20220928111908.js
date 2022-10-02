const createError = require("http-errors")

//404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "your requested content was not found"))
}

//default error handler
function errorHandler(err, req, res, next) {
    res.locals.error = 
}

module.exports = {
    notFoundHandler, 
    errorHandler
}