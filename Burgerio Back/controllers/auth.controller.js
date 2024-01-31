const Member = require('../models/member.model');

const registration = async (request, response) => {
    const email_candidate = await Member.findOne({ email: request.body.email });

    if (email_candidate) {
        return response
            .status(409)
            .json({ success: false, message: `Member already register with email "${request.body.email}"` });
    }

    const new_member = await Member.create(request.body);

    const access_token = await new_member.getSignedJWT();

    response.status(200).json({ success: true, access_token: access_token });
};

const login = async (request, response) => {
    const email_candidate = await Member.findOne({ email: request.body.email });

    if (!email_candidate) {
        return response
            .status(404)
            .json({ success: false, message: `Member not found with id "${request.body.email}"` });
    }

    const isMatch = await email_candidate.matchPassword(request.body.password);

    if (!isMatch) {
        return response.status(400).json({ success: false, message: 'Password incorrect' });
    }

    const access_token = await email_candidate.getSignedJWT();

    response.status(200).json({ success: true, access_token: access_token });
};

module.exports = { registration, login };