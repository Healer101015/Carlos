import React from 'react';

// Importando as imagens necessárias
import iphoneImg from '../assets/iphone.png';
import macbookImg from '../assets/macbook.png';
import solvBLogo from '../assets/solv.png';

const ValueProposition = () => {
    return (
        <section className="py-10 pb-24 px-4 overflow-hidden">
            {/* Estilos de animação específicos desta seção */}
            <style>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                {/* LADO ESQUERDO: IMAGENS FLUTUANTES */}
                <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10"></div>
                    <div className="relative w-full max-w-[550px]">
                        <div className="relative z-10 animate-float-slow">
                            <img src={macbookImg} alt="MacBook Reparo" className="w-full h-auto drop-shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-10 -right-4 w-[35%] z-20 animate-float-medium" style={{ animationDelay: '1s' }}>
                            <img src={iphoneImg} alt="iPhone Reparo" className="w-full h-auto drop-shadow-2xl" />
                            <div className="absolute -top-6 -left-12 bg-white/80 backdrop-blur border border-white/50 shadow-lg px-4 py-2 rounded-xl flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-700">Peças Premium</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO: TEXTO E BENEFÍCIOS */}
                <div className="flex-1 space-y-6">

                    <div className="flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
                        <img src={solvBLogo} alt="SOLVPLACE" className="h-6 w-auto object-contain" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Tecnologia parada <br />
                        <span className="text-blue-600">é dinheiro perdido.</span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        A <strong>SOLVPLACE</strong> oferece assistência técnica especializada com honestidade, rapidez e segurança.
                    </p>

                    <p className="text-base text-slate-500 leading-relaxed">
                        Se seu eletrônico está travando, esquentando ou não ligando, fale com a gente. Buscamos e entregamos no seu endereço.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {["Diagnóstico Claro", "Reparo Profissional", "Economize até 60%", "Garantia Inclusa"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs shrink-0">✓</div>
                                <span className="text-slate-700 font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ValueProposition;