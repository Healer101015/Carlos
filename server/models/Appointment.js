const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O nome é obrigatório.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'O email é obrigatório.'],
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: [true, 'O telefone é obrigatório.'],
    },
    service: {
        type: String,
        required: [true, 'O serviço é obrigatório.'],
        enum: ['Tratamento Clínico', 'Nutracêuticos', 'Consulta Inicial', 'Outro'],
    },
    preferredDate: {
        type: Date,
        required: [true, 'A data preferencial é obrigatória.'],
    },
    preferredTime: {
        type: String, // Ex: "Manhã (9h-12h)", "Tarde (14h-18h)"
        required: [true, 'O período preferencial é obrigatório.'],
    },
    status: {
        type: String,
        enum: ['Pendente', 'Confirmado', 'Cancelado', 'Realizado'],
        default: 'Pendente',
    },
    notes: {
        type: String,
        trim: true,
    },
}, { timestamps: true }); // 'timestamps' adiciona 'createdAt' e 'updatedAt' automaticamente

module.exports = mongoose.model('Appointment', AppointmentSchema);