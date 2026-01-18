import React from 'react';
import { Link } from 'react-router-dom';
// Certifique-se de que o arquivo solv.png está em src/assets/
import SolvLogo from '../assets/solv.png';

const Navbar = () => {

  // Função para compartilhar o site no WhatsApp
  const handleShare = () => {
    const text = "Oi! Conheça a SOLVPLACE, assistência técnica que busca e entrega em casa. Recomendo! 🚀";
    const url = window.location.href; // Pega o link atual do site (ou coloque fixo: https://solvplace.com.br)

    // Abre a API do WhatsApp
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* LADO ESQUERDO: LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* LOGO IMAGEM */}
              <img
                src={SolvLogo}
                alt="Solvplace Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />


            </Link>
          </div>

          {/* LADO DIREITO: LINKS E BOTÕES */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">


            {/* BOTÃO DE COMPARTILHAR (NOVO) */}


            {/* BOTÃO DE CONTATO */}
            <a
              href="https://wa.me/5511952924711"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Fale Conosco
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;