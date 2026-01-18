const express = require('express');
const router = express.Router();
const EmergencyRequest = require('../models/EmergencyRequest');

// Rota para CRIAR uma nova solicitação de emergência
router.post('/', async (req, res) => {
    try {
        const { name, phone, message } = req.body;

        if (!name || !phone || !message) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios." });
        }

        const newRequest = new EmergencyRequest({ name, phone, message });
        const savedRequest = await newRequest.save();

        res.status(201).json({
            message: "Sua solicitação de emergência foi enviada. Entraremos em contato em breve!",
            request: savedRequest
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao enviar solicitação de emergência.", error: error.message });
    }
});

module.exports = router;