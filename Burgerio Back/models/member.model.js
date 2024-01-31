const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const MemberSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        repeatPassword: {
            type: String,
            required: true,
        }
    },
    { timestamps: true, versionKey: false }
);

MemberSchema.pre('save', async function (next) {
    if (!this.isModified('password') && !this.isModified('repeatPassword')) {
        next();
    }

    const generated_salt = await bcrypt.genSalt(10);

    const hashed_password = await bcrypt.hash(this.password, generated_salt);

    this.password = hashed_password;

    this.repeatPassword = hashed_password;
});

MemberSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

MemberSchema.methods.getSignedJWT = function () {
    return jwt.sign({ _id: this._id }, 'SECRET_KEY_STRING', { expiresIn: 3600000 });
};

module.exports = mongoose.model('Member', MemberSchema);