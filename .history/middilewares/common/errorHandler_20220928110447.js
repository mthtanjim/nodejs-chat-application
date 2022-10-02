const createError = require("http-errors")

//404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, "your requested content was not found"))
}