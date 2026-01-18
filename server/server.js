// --- 1. Importação dos Módulos Essenciais ---
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// --- 2. Importação das Rotas da Aplicação ---
const appointmentRoutes = require('./routes/appointments');
const articleRoutes = require('./routes/articles');
const emergencyRequestRoutes = require('./routes/emergencyRequests');

// --- 3. Inicialização e Configuração do Express ---
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- 4. Conexão com o Banco de Dados MongoDB ---
// **ESTA É A LINHA CORRETA E SEGURA**
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("✅ Conexão com o MongoDB estabelecida com sucesso.");
    })
    .catch((err) => {
        console.error("❌ Erro ao conectar com o MongoDB:", err.message);
        process.exit(1);
    });

// --- 5. Definição das Rotas da API ---
app.use('/api/appointments', appointmentRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/emergency', emergencyRequestRoutes);

// --- 6. Servindo o Frontend em Produção ---
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}

// --- 7. Inicialização do Servidor ---
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta: ${PORT}`);
});