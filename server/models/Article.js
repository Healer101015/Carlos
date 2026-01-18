const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    slug: { // Para URLs amigáveis, ex: /blog/meu-primeiro-artigo
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    content: { // O corpo do artigo, pode ser HTML ou Markdown
        type: String,
        required: true,
    },
    excerpt: { // Um pequeno resumo para mostrar nas listagens
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Tratamento Clínico', 'Nutracêuticos', 'Bem-estar', 'Novidades'],
        required: true,
    },
    author: {
        type: String,
        default: 'Pele Brasileira',
    },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);