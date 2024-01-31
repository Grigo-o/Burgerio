const { validationResult, body, matchedData } = require('express-validator');

const LoginValidator = [
    body('email').isString().not().isEmpty(),
    body('password').isString().not().isEmpty(),

    (request, response, next) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(422).json({ success: false, errors: errors.array() });
        }

        request.body = matchedData(request, { locations: ['body'] });

        return next();
    },
];

module.exports = { LoginValidator };