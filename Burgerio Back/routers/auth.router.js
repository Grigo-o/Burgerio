const express = require('express');
const authController = require('../controllers/auth.controller');
const { RegistrationValidator } = require('../validators/auth/registration.validator');
const { LoginValidator } = require('../validators/auth/login.validator');
const router = express.Router();

router.route('/registration').post(RegistrationValidator, authController.registration);

router.route('/login').post(LoginValidator, authController.login);

module.exports = router;
