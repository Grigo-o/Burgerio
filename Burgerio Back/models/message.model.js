const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

module.exports = model('Message', MessageSchema);