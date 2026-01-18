const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Rota para CRIAR um novo agendamento (acessível publicamente)
router.post('/', async (req, res) => {
    try {
        const { name, email, phone, service, preferredDate, preferredTime, notes } = req.body;

        const newAppointment = new Appointment({
            name,
            email,
            phone,
            service,
            preferredDate,
            preferredTime,
            notes,
        });

        const savedAppointment = await newAppointment.save();

        // Opcional: Enviar email de notificação para o admin aqui.

        res.status(201).json({ message: "Solicitação de agendamento enviada com sucesso!", appointment: savedAppointment });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar agendamento.", error: error.message });
    }
});

// --- Futuramente, adicionar rotas de admin aqui ---
// GET / -> Listar todos os agendamentos (protegida)
// PUT /:id -> Atualizar status de um agendamento (protegida)

module.exports = router;