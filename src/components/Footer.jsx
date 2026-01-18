// src/components/Footer.jsx
import React from 'react';
import Icon from './Icon'; // Importando o ícone reutilizável
import solvBLogo from '../assets/solvB.png'; // Importando o logo

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">

        <div className="col-span-1 md:col-span-1">
          {/* Logo substituindo o texto */}
          <img
            src={solvBLogo}
            alt="Solvplace"
            className="h-8 md:h-10 w-auto object-contain mb-4"
          />

          <p className="leading-relaxed mb-6">
            Sua parceira de confiança para assistência técnica delivery. Rapidez, honestidade e qualidade.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
              <Icon path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition">
              <Icon path={<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M16 2H8a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />} className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Serviços</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">Troca de Tela</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Troca de Bateria</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Formatação</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Limpeza de Console</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contato</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} className="w-4 h-4" />
              11 95292-4711 (SP)
            </li>
            <li className="flex items-center gap-2">
              <Icon path={<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />} className="w-4 h-4" />
              41 99239-0423 (PR)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal</h3>
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
            <li className="pt-2">*Frete grátis sujeito a raio de distância e valor mínimo. Consulte.</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
        &copy; {new Date().getFullYear()} Solvplace Assistência Técnica. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;