const Message = require('../models/message.model');

const getAll = async (request, response) => {
    const messages = await Message.find();

    response.status(200).json({ success: true, messages: messages });
};

const getOne = async (request, response) => {
    const message = await Message.findById(request.params.id);

    if (!message) {
        return response
            .status(404)
            .json({ success: false, message: `Message not found with id "${request.params.id}"` });
    }

    response.status(200).json({ success: true, message: message });
};

const create = async (request, response) => {
    const new_message = await Message.create(request.body);

    response.status(200).json({ success: true, new_message: new_message });
};

const updateOne = async (request, response) => {
    const message = await Message.findById(request.params.id);

    if (!message) {
        return response
            .status(404)
            .json({ success: false, message: `Message not found with id "${request.params.id}"` });
    }

    const updated_message = await Message.findByIdAndUpdate(message._id, request.body, {
        new: true,
    });

    response.status(200).json({ success: true, message: updated_message });
};

const deleteOne = async (request, response) => {
    const message = await Message.findById(request.params.id);

    if (!message) {
        return response
            .status(404)
            .json({ success: false, message: `Message not found with id "${request.params.id}"` });
    }

    await Message.findByIdAndDelete(message._id);

    response.status(200).json({ success: true });
};

module.exports = {
    getAll,
    getOne,
    create,
    updateOne,
    deleteOne,
};