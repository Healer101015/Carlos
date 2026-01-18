const mongoose = require('mongoose');

const EmergencyRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    isHandled: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('EmergencyRequest', EmergencyRequestSchema);