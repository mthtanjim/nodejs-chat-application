const createError = require("http")

//404 not found handler
function notFoundHandler(req, res, next) {
    next()
}