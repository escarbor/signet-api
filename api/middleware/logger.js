
module.exports.logErrors = function (err, req, res, next) {
    console.error(err.stack);
    next(err);
}