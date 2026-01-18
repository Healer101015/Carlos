import React, { useState } from 'react';
import axios from 'axios';

// Componente para feedback visual (sucesso ou erro)
const Alert = ({ message, type }) => {
    const baseClasses = "p-4 rounded-xl text-sm font-medium text-center backdrop-blur-sm";
    const typeClasses = {
        success: "bg-green-100/70 text-green-900",
        error: "bg-red-100/70 text-red-900",
    };
    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>
            {message}
        </div>
    );
};

export default function Scheduling() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Consulta Inicial',
        preferredDate: '',
        preferredTime: 'Manhã (9h-12h)',
        notes: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        message: '',
        type: '' // 'success' ou 'error'
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await axios.post('http://localhost:5000/api/appointments', formData);

            setFormStatus({
                submitted: true,
                message: 'Solicitação enviada com sucesso! Entraremos em contato em breve para confirmar.',
                type: 'success',
            });

            setFormData({
                name: '', email: '', phone: '', service: 'Consulta Inicial',
                preferredDate: '', preferredTime: 'Manhã (9h-12h)', notes: ''
            });

        } catch (error) {
            setFormStatus({
                submitted: true,
                message: 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.',
                type: 'error',
            });
            console.error("Erro no agendamento:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex-grow container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Agende sua Consulta</h1>
                    <p className="mt-2 text-gray-600">
                        Preencha o formulário para dar o primeiro passo em direção à sua melhor versão.
                    </p>
                </div>

                {formStatus.submitted ? (
                    <Alert message={formStatus.message} type={formStatus.type} />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400" placeholder="(XX) XXXXX-XXXX" />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Qual serviço você procura?</label>
                            <select name="service" id="service" value={formData.service} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400">
                                <option>Consulta Inicial</option>
                                <option>Tratamento Clínico</option>
                                <option>Nutracêuticos</option>
                                <option>Outro</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Data de Preferência</label>
                                <input type="date" name="preferredDate" id="preferredDate" value={formData.preferredDate} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400" />
                            </div>
                            <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Período de Preferência</label>
                                <select name="preferredTime" id="preferredTime" value={formData.preferredTime} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400">
                                    <option>Manhã (9h-12h)</option>
                                    <option>Tarde (14h-18h)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Informações Adicionais (opcional)</label>
                            <textarea name="notes" id="notes" rows="4" value={formData.notes} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white/50 border border-rose-200 rounded-md shadow-sm focus:outline-none focus:ring-rose-400 focus:border-rose-400" placeholder="Nos conte um pouco mais sobre o que você precisa..."></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-rose-400 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:bg-rose-300 transition-colors"
                            >
                                {isLoading ? 'Enviando...' : 'Solicitar Agendamento'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}