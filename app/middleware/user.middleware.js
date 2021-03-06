/**
 * @file            : user.middleware.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 15-10-2021
 */
class UserMiddleware {
    /**
     * @description Middleware to validate the name and email ID
     * @param {Object} req 
     * @param {Object} res 
     * @param {Object} next 
     * @returns status of the action.
     */
    userValidation = (req, res, next) => {
        var regexPatternName = new RegExp("^[A-Z][a-zA-Z]{2,}");
        if ((!regexPatternName.test(req.body.firstName)) && (!regexPatternName.test(req.body.lastName))) {
            return res.status(400).send({
                message: "Please enter a valid name with first letter capital."
            });
        }
        var emailRegex = RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$");
        if (!emailRegex.test(req.body.email)) {
            return res.status(400).send({
                message: "Please enter a valid email ID.",
            });
        }
        next();
    }
}
module.exports = new UserMiddleware();