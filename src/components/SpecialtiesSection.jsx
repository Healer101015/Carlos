import React, { useRef, useState, useEffect } from 'react';

// Importando ícones do react-icons
import { FaGamepad, FaTabletAlt, FaTools, FaLaptop, FaMobileAlt, FaApple } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';

const SpecialtiesSection = () => {
    const scrollRef = useRef(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Lista de especialidades (Agora 100% Ícones)
    const specialties = [
        {
            name: "Notebooks",
            sub: "Teclado, Carcaça, Placa",
            icon: <FaLaptop />
        },
        {
            name: "MacBooks",
            sub: "Especialistas Apple",
            icon: <FaApple />
        },
        {
            name: "Android/iPhone",
            sub: "Troca de tela e Bateria",
            icon: <FaMobileAlt />
        },
        {
            name: "Videogames",
            sub: "Consoles de Mesa",
            icon: <IoGameController />
        },
        {
            name: "Portáteis",
            sub: "Switch, Steam Deck",
            icon: <BsNintendoSwitch />
        },
        {
            name: "Tablets e iPads",
            sub: "Vidro e Componentes",
            icon: <FaTabletAlt />
        },
        {
            name: "Controles",
            sub: "Manutenção de Joysticks",
            icon: <FaGamepad />
        },
        {
            name: "Limpeza/Soft.",
            sub: "Otimização do sistema",
            icon: <FaTools />
        },
    ];

    // --- LÓGICA DO CARROSSEL ---
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
                    current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }
    };

    // Auto-play do carrossel
    useEffect(() => {
        const interval = setInterval(() => scroll('right'), 4000);
        return () => clearInterval(interval);
    }, []);

    // --- LÓGICA DO LIGHTBOX ---
    const openLightbox = (index) => setSelectedImageIndex(index);
    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % specialties.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
    };

    // Helper para renderizar o conteúdo (Agora focado em Ícones)
    const renderContent = (item, isLightbox = false) => {
        return (
            <div className={`text-blue-600 transition-transform duration-300 ${isLightbox
                    ? 'text-[150px] md:text-[200px] text-blue-400 drop-shadow-2xl animate-zoom-in'
                    : 'text-6xl group-hover/card:scale-110 group-hover/card:text-blue-500'
                }`}>
                {item.icon}
            </div>
        );
    };

    return (
        <section id="servicos" className="py-24 px-4 bg-white relative">
            <div className="max-w-7xl mx-auto">

                {/* Cabeçalho */}
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">O que consertamos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Nossas Especialidades</h2>
                    <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
                        Suporte completo para Notebooks, MacBooks, Android, Videogames e Portáteis.
                    </p>
                </div>

                {/* WRAPPER RELATIVO PARA CENTRALIZAR AS SETAS */}
                <div className="relative group/slider">

                    {/* Botão Anterior */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white shadow-xl rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 flex items-center justify-center border border-slate-100 opacity-0 group-hover/slider:opacity-100 duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Área de Rolagem (Slider) */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth px-4 py-6"
                    >
                        {specialties.map((item, idx) => (
                            <div
                                key={idx}
                                className="min-w-[240px] md:min-w-[280px] flex-shrink-0 relative bg-slate-50 rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2 border border-slate-100 flex flex-col items-center text-center group/card cursor-pointer"
                                onClick={() => openLightbox(idx)}
                            >
                                {/* Container do Ícone */}
                                <div className="mb-6 relative w-28 h-28 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 scale-0 group-hover/card:scale-125"></div>

                                    {renderContent(item, false)}

                                    {/* Ícone de "Zoom" indicativo */}
                                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0 z-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-800 text-lg mb-1">{item.name}</h3>
                                <p className="text-sm text-slate-500">{item.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Botão Próximo */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white shadow-xl rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 flex items-center justify-center border border-slate-100 opacity-0 group-hover/slider:opacity-100 duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- LIGHTBOX (MODAL DE TELA CHEIA) --- */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeLightbox}
                >
                    <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button onClick={prevImage} className="absolute left-4 md:left-10 text-white/70 hover:text-white hover:scale-110 transition p-2 bg-white/10 rounded-full z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex flex-col items-center max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                        <div className="relative group flex items-center justify-center h-[40vh] md:h-[50vh] w-full">
                            {renderContent(specialties[selectedImageIndex], true)}
                        </div>
                        <div className="mt-6 text-center text-white">
                            <h3 className="text-3xl font-bold mb-2">{specialties[selectedImageIndex].name}</h3>
                            <p className="text-blue-200 text-lg">{specialties[selectedImageIndex].sub}</p>
                            <p className="text-white/40 text-sm mt-4">
                                {selectedImageIndex + 1} de {specialties.length}
                            </p>
                        </div>
                    </div>

                    <button onClick={nextImage} className="absolute right-4 md:right-10 text-white/70 hover:text-white hover:scale-110 transition p-2 bg-white/10 rounded-full z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            )}

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                @keyframes zoom-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default SpecialtiesSection;