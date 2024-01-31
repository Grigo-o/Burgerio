const express = require('express');
const messagesController = require('../controllers/messages.controller');
const { MongoIDValidator } = require('../validators/common/mongo-id.validator');
const { CreateMessageValidator } = require('../validators/message/create-message.validator');
const router = express.Router();

router.route('/').get(messagesController.getAll).post(CreateMessageValidator, messagesController.create);

router
    .route('/:id')
    .get(MongoIDValidator, messagesController.getOne)
    .put(MongoIDValidator, messagesController.updateOne)
    .delete(MongoIDValidator, messagesController.deleteOne);

module.exports = router;