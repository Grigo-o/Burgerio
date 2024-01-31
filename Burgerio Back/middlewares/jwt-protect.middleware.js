const Member = require('../models/member.model');
const jwt = require('jsonwebtoken');

const jwtProtect = async (request, response, next) => {
    let request_token;

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer ')) {
        request_token = request.headers.authorization.split(' ')[1];
    }

    if (!request_token) {
        return response.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }

    try {
        const decoded_request_token = jwt.verify(request_token, 'SECRET_KEY_STRING');

        const request_user = await Member.findById(decoded_request_token._id);

        if (!request_user) {
            return response.status(401).json({ success: false, message: 'User not found' });
        }

        request.user = request_user;

        next();
    } catch (error) {
        return response.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = { jwtProtect };