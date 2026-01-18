// src/components/HeroSection.jsx
import React from 'react';
import Icon from './Icon';
import CircuitBackground from './CircuitBackground';
import solvBLogo from '../assets/solvB.png';

const HeroSection = ({ onShareClick }) => {
    return (
        <section className="relative text-white py-20 lg:py-28 px-4 overflow-hidden bg-slate-900">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e3a8a] opacity-90"></div>
                <CircuitBackground />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Coluna da Esquerda: Texto e Identidade */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">

                    {/* --- 1. ÍCONE/LOGO NO TOPO (CENTRALIZADO NA COLUNA) --- */}
                    <div className="relative group mb-8">
                        {/* Glow effect */}
                        <div className="absolute -inset-6 bg-blue-600/30 rounded-full blur-2xl group-hover:bg-blue-500/40 transition duration-700"></div>
                        <img
                            src={solvBLogo}
                            alt="SOLVPLACE Logo"
                            className="relative h-28 md:h-36 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Tagline Delivery (Pequena e discreta acima do título) */}
                    <div className="mb-6 inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/20 text-cyan-300 text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span>Delivery & Frete Grátis</span>
                    </div>

                    {/* --- 2. TÍTULO (SLOGAN) --- */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-8">
                        Na hora do problema, <br /> escolha quem
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            {' '}cuida de verdade.
                        </span>
                    </h1>

                    {/* --- 3. BLOCO COM A BARRA AZUL (TEXTO ORNADO) --- */}
                    {/* Aqui a barra azul conecta os subtítulos e a descrição */}
                    <div className="relative pl-6 border-l-4 border-blue-500/80 flex flex-col gap-3 mb-8 text-left max-w-xl">

                        {/* Subtítulos de Impacto */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-100">
                                Confiança que resolve.
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-light">
                                Qualidade que permanece.
                            </p>
                        </div>

                        {/* Parágrafo Descritivo */}
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-2 opacity-90">
                            A <strong>SOLVPLACE</strong> busca, conserta e devolve seu eletrônico. Sem trânsito, sem filas e com a garantia técnica de quem é especialista no assunto.
                        </p>
                    </div>

                    {/* --- 4. BOTÕES DE AÇÃO --- */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#orcamento-form" className="flex-1 sm:flex-none group bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-base">
                            <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} />
                            <span>Orçamento Rápido</span>
                        </a>

                        <button
                            onClick={onShareClick}
                            className="flex-1 sm:flex-none group bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 font-semibold py-3.5 px-6 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Icon path={<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />} />
                            <span>Compartilhar</span>
                        </button>
                    </div>
                </div>

                {/* Coluna da Direita: Cards Flutuantes (Mantido Original) */}
                <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden md:block">
                    <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6">
                        {[
                            { title: "Apple Expert", sub: "iPhone e Mac", icon: <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z M10 2c1 .5 2 2 2 5" />, color: "text-white" },
                            { title: "Android", sub: "Samsung e outros", icon: <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 20V4h10v16H7z" />, color: "text-green-300" },
                            { title: "Consoles", sub: "Games e Controles", icon: <path d="M6 12h2v3a3 3 0 0 0 6 0v-3h2M6 12a6 6 0 0 1 12 0M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />, color: "text-purple-300" },
                            { title: "Notebooks", sub: "Todas as marcas", icon: <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />, color: "text-blue-300" },
                        ].map((card, idx) => (
                            <div key={idx} className={`bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col justify-between h-40 transform transition hover:scale-105 hover:bg-white/10 ${idx % 2 !== 0 ? 'translate-y-8' : ''}`}>
                                <div className={`p-3 bg-gradient-to-br from-white/10 to-transparent w-fit rounded-lg ${card.color}`}>
                                    <Icon path={card.icon} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">{card.title}</h3>
                                    <p className="text-slate-400 text-xs mt-1">{card.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;