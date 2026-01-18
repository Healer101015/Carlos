import React from 'react';

const CircuitBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <style>{`
        @keyframes flow {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .circuit-path {
          fill: none;
          stroke: rgba(6, 182, 212, 0.15); /* Cyan escuro base */
          stroke-width: 2;
          stroke-linejoin: round;
          stroke-linecap: round;
        }

        .circuit-active {
          fill: none;
          stroke: url(#active-gradient);
          stroke-width: 3;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 150 1000;
          stroke-dashoffset: 1150;
          animation: flow 4s linear infinite;
          filter: url(#glow);
        }

        .node {
          fill: #0891b2;
          stroke: #22d3ee;
          stroke-width: 2;
        }

        .delay-1 { animation-delay: 0s; }
        .delay-2 { animation-delay: 1.5s; }
        .delay-3 { animation-delay: 2.5s; }
        .delay-4 { animation-delay: 0.8s; }
      `}</style>

            <svg
                className="w-full h-full"
                viewBox="0 0 1000 800"
                /* xMaxYMin slice:
                   xMax: Cola na DIREITA
                   YMin: Cola no TOPO
                   slice: Cobre a tela sem distorcer
                */
                preserveAspectRatio="xMaxYMin slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="active-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
                        <stop offset="50%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                    </linearGradient>

                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* === GRUPO PRINCIPAL: CANTO SUPERIOR DIREITO === */}
                {/* Ajuste de Translate para compensar bordas se necessário */}
                <g transform="translate(20, -20)">

                    {/* TRILHA 1: A "Espinha Dorsal" (Vertical longa) */}
                    {/* Agora começa em x=900 e vai diminuindo (indo para esquerda) */}
                    <path className="circuit-path" d="M900 0 V150 L850 200 H750 L700 250 V400" />
                    <path className="circuit-active delay-1" d="M900 0 V150 L850 200 H750 L700 250 V400" />
                    <circle cx="700" cy="400" r="4" className="node" />

                    {/* TRILHA 2: Horizontal Superior */}
                    <path className="circuit-path" d="M1000 100 H880 L820 160 H650" />
                    <path className="circuit-active delay-2" d="M1000 100 H880 L820 160 H650" />
                    <circle cx="650" cy="160" r="4" className="node" />

                    {/* TRILHA 3: Complexa (Ramificação) */}
                    <path className="circuit-path" d="M950 0 V80 L860 170 V300 L820 340 H720" />
                    <path className="circuit-active delay-4" d="M950 0 V80 L860 170 V300 L820 340 H720" />
                    <circle cx="720" cy="340" r="4" className="node" />

                    {/* TRILHA 4: Detalhe curto canto */}
                    <path className="circuit-path" d="M800 0 V50 L750 100 H600" />
                    <path className="circuit-active delay-3" d="M800 0 V50 L750 100 H600" />
                    <circle cx="600" cy="100" r="4" className="node" />

                    {/* TRILHA 5: Fundo (Mais apagada para volume) */}
                    <path className="circuit-path" opacity="0.5" d="M1000 250 H920 L870 300 V500" />
                    <circle cx="870" cy="500" r="3" className="node" />

                    {/* Elementos Decorativos (Chips/Conectores) */}
                    <circle cx="850" cy="200" r="3" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1" />
                    <circle cx="820" cy="160" r="3" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1" />
                </g>

                {/* === DETALHES FLUTUANTES ESQUERDA (Para equilibrar telas gigantes) === */}
                <g opacity="0.4">
                    <path className="circuit-path" d="M400 0 V100 L450 150 H550" />
                    <circle cx="550" cy="150" r="3" className="node" />
                </g>

            </svg>
        </div>
    );
};

export default CircuitBackground;