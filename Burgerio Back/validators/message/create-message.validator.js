const { validationResult, body, matchedData } = require('express-validator');

const CreateMessageValidator = [
    body('fullName').isString().not().isEmpty(),
    body('email').isString().not().isEmpty(),
    body('number').isString().not().isEmpty(),
    body('message').isString().not().isEmpty(),

    (request, response, next) => {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(422).json({ success: false, errors: errors.array() });
        }

        request.body = matchedData(request, { locations: ['body'] });

        return next();
    },
];

module.exports = { CreateMessageValidator };