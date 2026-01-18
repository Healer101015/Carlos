const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// Rota para LISTAR todos os artigos (público)
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().sort({ createdAt: -1 }); // Mais recentes primeiro
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar artigos." });
    }
});

// Rota para BUSCAR um único artigo pelo seu 'slug' (público)
router.get('/:slug', async (req, res) => {
    try {
        const article = await Article.findOne({ slug: req.params.slug });
        if (!article) {
            return res.status(404).json({ message: "Artigo não encontrado." });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o artigo." });
    }
});

// --- Futuramente, adicionar rotas de admin aqui para criar/editar artigos ---

module.exports = router;