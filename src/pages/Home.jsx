import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, Pill, Activity, MessageCircle, Ambulance, Scale, ShieldAlert, Clock, User, MapPin, Bone, Users, FileWarning, Zap, CreditCard, Layout, FileText, X, ChevronRight } from 'lucide-react';

// IMPORTAÇÃO DA IMAGEM DO RELATÓRIO
// Certifique-se que o arquivo MEDICO.PNG está na pasta src/assets/
import medicoImg from '../assets/MEDICO.png';
import euImg from '../assets/eu.png'; // 1. Importe a imagem aqui

const Home = () => {
  // --- DADOS DA CÉLIA ---
  const celiaData = {
    personalInfo: {
      name: "Celia Aparecida Monteiro Vieira",
      birthDate: "04/03/78",
      sex: "F",
      bloodType: "",
      photo: euImg, // 2. Use a variável diretamente (sem aspas)
      religion: "Testemunha de Jeová",
      conditions: [
        "Doença Celíaca (CID10-K90)",
        "Hipotireoidismo",
        "Hérnias Discais Lombares",
        "Espondiloartrose",
        "Artrose Fêmoro-Patelar (Joelho Esq.)",
        "Condromalácia Patelar (Esq.)",
        "Hoffite (Joelho Esq.)"
      ]
    },
    emergencyContacts: [
      { name: "Jose Carlos", relation: "Marido", phone: "11933172304" },
      { name: "Beatriz Monteiro Vieira", relation: "Filha", phone: "5511913437746" },
      { name: "Leandro Rojo", relation: "Procurador", phone: "551197642927", address: "Rua Desembargador Carneiro Ribeiro, 48" },
      { name: "Admir Bernadino Siqueira", relation: "Procurador Alt.", phone: "55119969428995", address: "Av. Waldemar Frietz, 1062 - Apto 211, Cohab Anchieta" }
    ],
    medicalInfo: {
      allergies: ["Glúten (Grave)", "Paracetamol com Codeína"],
      medications: [
        { name: "Levotiroxina (Hipotireoidismo)", time: "Jejum" },
        { name: "Medicação para Dor", time: "S/N (Evitar Codeína)" }
      ],
      insurance: {
        unimed: { number: "0V236000613002", plan: "SMART 200UP + RMCA CA ENF", accommodation: "Enfermaria", validity: "N/A" },
        sus: { number: "898 0014 0840 5735" }
      },
      advanceDirective: "TESTEMUNHA DE JEOVÁ: RECUSA ABSOLUTA DE TRANSFUSÃO DE SANGUE (Total ou Componentes Primários). Documento legal em posse dos procuradores.",
      observation: "Paciente com múltiplas patologias ortopédicas e autoimunes. Risco de choque com Glúten/Codeína."
    }
  };

  // --- ESTADOS E EFEITOS ---
  const [alertIndex, setAlertIndex] = useState(0);
  const [showReport, setShowReport] = useState(false); // Estado para controlar o modal do relatório

  const criticalAlerts = [
    { text: "DOENÇA CELÍACA - ZERO GLÚTEN", color: "bg-orange-500", icon: <AlertTriangle size={16} /> },
    { text: "PROIBIDO TRANSFUSÃO DE SANGUE", color: "bg-red-600", icon: <FileWarning size={16} /> },
    { text: "ALERGIA: PARACETAMOL + CODEÍNA", color: "bg-amber-600", icon: <ShieldAlert size={16} /> },
    { text: "TESTEMUNHA DE JEOVÁ", color: "bg-indigo-600", icon: <Scale size={16} /> },
    { text: "PROBLEMAS ORTOPÉDICOS GRAVES", color: "bg-slate-600", icon: <Bone size={16} /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % criticalAlerts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [criticalAlerts.length]);

  const currentAlert = criticalAlerts[alertIndex];
  const handleCall = (phone) => window.location.href = `tel:+${phone}`;
  const handleWhatsApp = (phone) => {
    const text = `URGENTE: Estou com a Célia Aparecida. Ela pode estar precisando de ajuda. Entre em contato imediatamente.`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-x-hidden pb-32 selection:bg-indigo-100">

      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none bg-slate-50" style={{
        backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>

      <style>{`
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-fade-in { animation: fade-in-up 0.6s ease-out forwards; }
        .hero-animated-bg { background: linear-gradient(-45deg, #312e81, #991b1b, #581c87, #1e3a8a); background-size: 400% 400%; animation: gradient-shift 6s ease infinite; }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <div className="hero-animated-bg text-white pt-10 pb-28 px-6 rounded-b-[3.5rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
        <div className="flex flex-col items-center animate-fade-in relative z-20">
          <div className="relative mb-6 group">
            <div className="absolute -inset-1 bg-white/20 rounded-full blur-md"></div>
            <img src={celiaData.personalInfo.photo} alt="Célia" className="w-44 h-44 rounded-full border-[5px] border-white/90 shadow-2xl object-cover relative z-10" />
          </div>
          <h1 className="text-3xl font-black tracking-tight mb-4 text-center leading-tight drop-shadow-md">{celiaData.personalInfo.name}</h1>
          <div className="h-10 mb-4 flex items-center justify-center w-full max-w-xs">
            <div key={alertIndex} className={`${currentAlert.color} text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg flex items-center gap-2 animate-fade-in transition-all duration-500 border border-white/30 backdrop-blur-sm`}>
              {currentAlert.icon} {currentAlert.text}
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <span className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-xl text-xs font-bold border border-white/20 text-indigo-100">
              <User size={14} /> {celiaData.personalInfo.birthDate}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-16 relative z-20 max-w-lg mx-auto space-y-6">

        {/* --- 2. CARD DE ALERTA: DIRETIVA --- */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden animate-fade-in border-2 border-red-100 ring-4 ring-red-50 ring-offset-2">
          <div className="bg-red-50 p-6 text-center border-b border-red-100">
            <div className="flex justify-center mb-3">
              <div className="bg-white p-3 rounded-full text-red-600 shadow-sm">
                <FileWarning size={32} />
              </div>
            </div>
            <h2 className="text-red-700 font-black text-lg uppercase tracking-tight leading-none mb-1">Diretiva Legal</h2>
            <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4">Atenção Médica</p>
            <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-sm text-left">
              <p className="text-slate-800 font-bold text-sm leading-relaxed">"{celiaData.medicalInfo.advanceDirective}"</p>
            </div>
          </div>
          <div className="bg-red-600 py-2 text-center">
            <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <AlertTriangle size={14} /> Proibido Transfusão
            </p>
          </div>
        </div>

        {/* --- 3. DOCUMENTOS DIGITAIS --- */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 flex items-center gap-2">
            <CreditCard size={14} /> Documentos Pessoais
          </h3>

          {/* CARTÃO UNIMED */}
          <div className="relative w-full h-56 bg-gradient-to-br from-teal-800 to-teal-600 rounded-2xl shadow-xl overflow-hidden text-white border border-teal-700/50">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Activity size={100} /></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="relative z-10 p-5 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-bold italic text-xl tracking-tighter">Hapvida Notredame<span className="font-light text-xs align-top">Seguros</span></span>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-bold tracking-wider">NACIONAL</span>
              </div>

              <div className="font-mono text-lg tracking-widest shadow-black drop-shadow-md my-2">
                {celiaData.medicalInfo.insurance.unimed.number}
              </div>

              <div className="flex justify-between items-end text-xs">
                <div>
                  <p className="text-teal-200 text-[10px] uppercase font-bold">Beneficiário</p>
                  <p className="font-bold text-sm truncate w-48">{celiaData.personalInfo.name}</p>
                  <div className="flex gap-4 mt-2">
                    <div>
                      <p className="text-teal-200 text-[10px] uppercase">Plano</p>
                      <p className="font-bold">{celiaData.medicalInfo.insurance.unimed.plan}</p>
                    </div>
                    <div>
                      <p className="text-teal-200 text-[10px] uppercase">Acomodação</p>
                      <p className="font-bold">{celiaData.medicalInfo.insurance.unimed.accommodation}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-teal-200 text-[10px] uppercase">Validade</p>
                  <p className="font-bold text-sm">{celiaData.medicalInfo.insurance.unimed.validity}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTÃO SUS */}
          <div className="relative w-full h-56 bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 flex flex-col">
            <div className="h-14 bg-blue-600 relative flex items-center px-4 overflow-hidden">
              <div className="absolute right-0 h-full w-24 bg-green-500 transform skew-x-12 translate-x-4"></div>
              <div className="absolute right-16 h-full w-4 bg-yellow-400 transform skew-x-12"></div>
              <span className="text-white font-bold text-lg italic tracking-tighter relative z-10">Sistema Único de Saúde</span>
              <span className="text-white/50 font-bold text-3xl absolute right-2 opacity-20">SUS</span>
            </div>

            <div className="flex-1 p-5 flex flex-col justify-center relative">
              <div className="absolute top-2 right-4 opacity-5">
                <Layout size={80} />
              </div>

              <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Número do Cartão Nacional de Saúde</p>
              <p className="font-black text-slate-800 text-2xl tracking-widest font-mono mb-4">
                {celiaData.medicalInfo.insurance.sus.number}
              </p>

              <div className="grid grid-cols-3 gap-2 text-xs border-t border-slate-200 pt-3">
                <div className="col-span-2">
                  <p className="text-slate-400 text-[10px] uppercase">Nome</p>
                  <p className="font-bold text-slate-700 truncate">{celiaData.personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">Nasc.</p>
                  <p className="font-bold text-slate-700">{celiaData.personalInfo.birthDate}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] uppercase">Sexo</p>
                  <p className="font-bold text-slate-700">{celiaData.personalInfo.sex}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. CONTATOS --- */}
        <div className="space-y-6 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3 flex items-center gap-2">
              <Users size={14} /> Família (Prioridade)
            </h3>
            <div className="space-y-3">
              {celiaData.emergencyContacts.slice(0, 2).map((contact, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{contact.name}</h4>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-indigo-50 text-indigo-600">{contact.relation}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleCall(contact.phone)} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95"><Phone size={18} className="text-indigo-600" /> Ligar</button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="flex-1 bg-green-500 hover:bg-green-600 text-white h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 shadow-lg shadow-green-500/20 transition-all active:scale-95"><MessageCircle size={18} /> WhatsApp</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3 flex items-center gap-2">
              <Scale size={14} /> Representantes Legais
            </h3>
            <div className="space-y-3">
              {celiaData.emergencyContacts.slice(2, 4).map((contact, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 text-lg leading-tight">{contact.name}</h4>
                    <span className="inline-block mt-1 mb-2 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-slate-800 text-white">{contact.relation}</span>
                    {contact.address && (
                      <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 font-medium leading-snug">{contact.address}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleCall(contact.phone)} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95"><Phone size={18} className="text-indigo-600" /> Ligar</button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="flex-1 bg-white hover:bg-green-50 text-green-600 border border-green-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95"><MessageCircle size={18} /> WhatsApp</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 5. INFO MÉDICA --- */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200 border border-slate-100 mt-6">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="bg-blue-100 p-2.5 rounded-2xl text-blue-600"><Activity size={20} /></div>
            <div><h3 className="font-bold text-slate-800 text-lg leading-none">Quadro Clínico</h3><p className="text-xs text-slate-400 mt-1 font-medium">Diagnósticos e Alergias</p></div>
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">Diagnósticos (CID)</span>
              <div className="flex flex-wrap gap-2">
                {celiaData.personalInfo.conditions.map((cond, i) => (
                  <span key={i} className={`text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-2 border shadow-sm transition-all hover:scale-105 ${cond.includes('Celíaca') ? 'bg-orange-50 text-orange-800 border-orange-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                    {cond.includes('Celíaca') && <AlertTriangle size={14} className="text-orange-500 shrink-0" />}
                    {(cond.includes('Hérnia') || cond.includes('Artrose') || cond.includes('Hoffite') || cond.includes('Condromalácia') || cond.includes('Espondiloartrose')) ? <Bone size={14} className="text-slate-400 shrink-0" /> : null}
                    {cond}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Zap size={80} className="text-amber-600" /></div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-3 block relative z-10">⚠ Alergias & Restrições</span>
              <div className="flex flex-wrap gap-2 relative z-10">
                {celiaData.medicalInfo.allergies.map((alg, i) => (
                  <span key={i} className={`text-xs font-bold px-3 py-2 rounded-xl shadow-sm border flex items-center gap-2 ${alg.includes('Glúten') || alg.includes('Codeína') ? 'bg-red-500 text-white border-red-600' : 'bg-white text-amber-900 border-amber-200'}`}>
                    <AlertTriangle size={12} className="shrink-0" /> {alg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 6. MEDICAMENTOS --- */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200 border border-slate-100 mt-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-teal-100 p-2.5 rounded-2xl text-teal-600"><Pill size={20} /></div>
            <h3 className="font-bold text-slate-800 text-lg">Uso Contínuo</h3>
          </div>
          <div className="space-y-3">
            {celiaData.medicalInfo.medications.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex flex-col"><span className="font-bold text-slate-700 text-sm">{item.name}</span></div>
                <span className="text-[10px] font-bold bg-white text-teal-600 px-3 py-1.5 rounded-lg flex items-center gap-1 border border-slate-100 shadow-sm shrink-0"><Clock size={12} /> {item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 7. NOVO BOTÃO: RELATÓRIO MÉDICO --- */}
        <div className="mt-8 mb-4">
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-white rounded-3xl p-5 shadow-lg shadow-indigo-100 border border-indigo-50 flex items-center justify-between group hover:border-indigo-200 transition-all active:scale-95"
          >
            <div className="flex items-center gap-4">
              <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-slate-800 text-lg">Relatório Médico</h3>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Toque para visualizar</p>
              </div>
            </div>
            <div className="bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
              <ChevronRight size={24} />
            </div>
          </button>
        </div>

        {/* --- MODAL DO RELATÓRIO --- */}
        {showReport && (
          <div className="fixed inset-0 z-[60] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowReport(false)}>
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl animate-fade-in" onClick={e => e.stopPropagation()}>
              {/* Header do Modal */}
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><FileText size={18} /></div>
                  <h3 className="font-bold text-slate-800 text-lg">Relatório Médico Digital</h3>
                </div>
                <button onClick={() => setShowReport(false)} className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Corpo do Modal (Imagem com Scroll) */}
              <div className="flex-1 overflow-y-auto bg-slate-50 p-4 flex justify-center items-start">
                <img
                  src={medicoImg}
                  alt="Relatório Médico"
                  className="w-full h-auto object-contain rounded-xl shadow-sm border border-slate-200"
                />
              </div>

              {/* Footer do Modal */}
              <div className="p-4 border-t border-slate-100 bg-white text-center">
                <p className="text-xs text-slate-400">Documento confidencial. Uso exclusivo para emergências.</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center pt-4 opacity-50">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Healer ID System</p>
        </div>

      </div>

      {/* --- BOTÃO FLUTUANTE SOS --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:192" className="group flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-red-600/40 shadow-2xl hover:scale-110 transition-transform border-[3px] border-white">
          <Ambulance size={28} className="group-hover:animate-pulse" />
          <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white shadow-sm">SOS</span>
        </a>
      </div>

    </div>
  );
};

export default Home;