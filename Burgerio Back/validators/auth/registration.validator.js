const { validationResult, body, matchedData } = require('express-validator');

const RegistrationValidator = [
    body('username').isString().not().isEmpty(),
    body('email').isString().not().isEmpty(),
    body('password').isString().not().isEmpty(),
    body('repeatPassword').isString().not().isEmpty(),


    (request, response, next) => {
        const errors = validationResult(request);

        if (request.body.repeatPassword !== request.body.password) {
            return response.status(422).json({ success: false, message: "Passwords do not match" });
        }

        if (!errors.isEmpty()) {
            return response.status(422).json({ success: false, errors: errors.array() });
        }

        request.body = matchedData(request, { locations: ['body'] });

        return next();
    },
];

module.exports = { RegistrationValidator };