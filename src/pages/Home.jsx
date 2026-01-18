import React, { useState, useEffect, useMemo } from 'react';
import {
  Phone, AlertTriangle, Pill, Activity, MessageCircle, Ambulance,
  Scale, ShieldAlert, Clock, User, MapPin, Bone, Users,
  FileWarning, Zap, Layout, FileText, HeartPulse, Wind, Stethoscope, Copy
} from 'lucide-react';

// IMPORTAÇÃO DA FOTO (Relatório removido)
import euImg from '../assets/carlos.png';

const Home = () => {
  // --- 1. MEMOIZATION DE DADOS ---
  const patientData = useMemo(() => ({
    personalInfo: {
      name: "José Carlos Vieira",
      birthDate: "23/09/1966",
      sex: "Masculino",
      photo: euImg,
      religion: "Testemunha de Jeová",
      conditions: [
        "Asma Brônquica",
        "Hipertensão Arterial"
      ]
    },
    emergencyContacts: [
      { name: "Celia Aparecida Monteiro", relation: "Esposa", phone: "5511964095636" },
      { name: "Beatriz Monteiro Vieira", relation: "Filha", phone: "5511913437746" },
      { name: "Ademir Bernadino Siqueira", relation: "Procurador", phone: "55119969428995", address: "Av. Waldemar Frietz, 1062 - Cohab Anchieta" },
      { name: "Claudinei Santos", relation: "Procurador Alt", phone: "5511927493848", address: "Rua Doutor Emanuel Dias - 258" },
    ],
    medicalInfo: {
      allergies: ["Nenhuma alergia medicamentosa conhecida"],
      medications: [
        { name: "Alenia", dosage: "12mcg/400mcg", time: "Uso Contínuo" },
        { name: "Olmesartana + Hidroclorotiazida", dosage: "40mg/12,5mg", time: "Uso Contínuo" }
      ],
      insurance: {
        sus: { number: "898 0014 3779 8618 1" }
      },
      advanceDirective: "TESTEMUNHA DE JEOVÁ: RECUSA ABSOLUTA DE TRANSFUSÃO DE SANGUE (Total ou Componentes).",
      observation: "Paciente hipertenso e asmático. Risco de broncoespasmo severo."
    }
  }), []);

  // --- ESTADOS ---
  const [alertIndex, setAlertIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // --- 2. ALERTAS ---
  const criticalAlerts = useMemo(() => [
    { text: "NÃO ACEITA TRANSFUSÃO", color: "bg-red-500", border: "border-red-400", icon: <FileWarning size={15} /> },
    { text: "TESTEMUNHA DE JEOVÁ", color: "bg-slate-600", border: "border-slate-500", icon: <Scale size={15} /> },
    { text: "HIPERTENSÃO ARTERIAL", color: "bg-rose-500", border: "border-rose-400", icon: <HeartPulse size={15} /> },
    { text: "ASMA BRÔNQUICA", color: "bg-teal-600", border: "border-teal-500", icon: <Wind size={15} /> }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % criticalAlerts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [criticalAlerts.length]);

  const currentAlert = criticalAlerts[alertIndex];

  // --- FUNÇÕES ---
  const handleCall = (phone) => window.location.href = `tel:+${phone}`;
  const handleWhatsApp = (phone) => {
    const text = `Olá, estou com o José Carlos Vieira. Situação de emergência.`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const copySusToClipboard = () => {
    navigator.clipboard.writeText(patientData.medicalInfo.insurance.sus.number.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans relative overflow-x-hidden pb-32 selection:bg-slate-300 text-slate-800">

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `radial-gradient(#cbd5e1 1.5px, transparent 1.5px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-fade-in { animation: fade-in-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .hero-animated-bg { 
          background: linear-gradient(135deg, #475569, #64748b, #334155, #52525b); 
          background-size: 300% 300%; 
          animation: gradient-shift 10s ease infinite; 
        }
        .glass-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); }
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="hero-animated-bg text-white pt-12 pb-24 px-6 rounded-b-[3rem] shadow-xl shadow-slate-300 relative z-10">
        <div className="flex flex-col items-center animate-fade-in">
          {/* Foto */}
          <div className="relative mb-5 group">
            <div className="absolute -inset-1 bg-white/10 rounded-full blur-md animate-pulse"></div>
            <img src={patientData.personalInfo.photo} alt="José Carlos" className="w-40 h-40 rounded-full border-4 border-slate-200 shadow-2xl object-cover relative z-10" />
            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white z-20" title="Ativo"></div>
          </div>

          <h1 className="text-3xl font-black tracking-tight mb-1 text-center drop-shadow-sm">{patientData.personalInfo.name}</h1>
          <p className="text-slate-300 text-sm font-medium mb-5 uppercase tracking-widest">{patientData.personalInfo.religion}</p>

          {/* Badge Alerta */}
          <div className="h-10 mb-2 flex items-center justify-center w-full max-w-sm">
            <div key={alertIndex} className={`${currentAlert.color} border ${currentAlert.border} text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-2 animate-fade-in`}>
              {currentAlert.icon} {currentAlert.text}
            </div>
          </div>

          <div className="flex gap-2 mt-2 opacity-80">
            <span className="bg-white/10 px-3 py-1 rounded-lg text-[10px] font-bold border border-white/10">{patientData.personalInfo.birthDate}</span>
            <span className="bg-white/10 px-3 py-1 rounded-lg text-[10px] font-bold border border-white/10">60 ANOS</span>
            <span className="bg-white/10 px-3 py-1 rounded-lg text-[10px] font-bold border border-white/10">Aposentado</span>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-16 relative z-20 max-w-lg mx-auto space-y-5">

        {/* --- CARD DIRETIVA --- */}
        <div className="glass-card rounded-3xl shadow-lg overflow-hidden animate-fade-in border-l-4 border-red-500 ring-1 ring-slate-200">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-50 p-2 rounded-lg text-red-600"><FileWarning size={24} /></div>
              <div>
                <h2 className="text-slate-800 font-bold text-sm uppercase">Diretiva Antecipada</h2>
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-wide">Protocolo Jurídico</p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-slate-700 text-sm font-medium leading-relaxed italic">
              "{patientData.medicalInfo.advanceDirective}"
            </div>
          </div>
        </div>

        {/* --- SUS CARD --- */}
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden relative">
            <div className="h-2 bg-blue-600 w-full flex">
              <div className="w-1/3 bg-blue-600"></div>
              <div className="w-1/3 bg-green-500"></div>
              <div className="w-1/3 bg-yellow-400"></div>
            </div>

            <div className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Layout className="text-slate-300" size={24} />
                  <span className="font-bold text-slate-700 text-sm">Cartão Nacional de Saúde</span>
                </div>
                <span className="text-slate-300 font-black text-xl select-none">SUS</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center mb-4">
                <p className="font-mono font-bold text-slate-800 text-lg tracking-widest">{patientData.medicalInfo.insurance.sus.number}</p>
                <button onClick={copySusToClipboard} className="text-blue-600 p-1 hover:bg-blue-50 rounded transition-colors">
                  {copied ? <span className="text-[10px] font-bold">Copiado!</span> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex gap-4 text-xs text-slate-500">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Nome</span>
                  <span className="font-semibold text-slate-700">{patientData.personalInfo.name}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Nascimento</span>
                  <span className="font-semibold text-slate-700">{patientData.personalInfo.birthDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTATOS --- */}
        <div className="animate-fade-in space-y-4" style={{ animationDelay: '0.2s' }}>

          {/* Seção Família */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2 mb-2 flex items-center gap-2">
              <Users size={12} /> Contatos de Emergência
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {patientData.emergencyContacts.slice(0, 2).map((contact, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{contact.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mt-0.5 bg-slate-100 inline-block px-2 py-0.5 rounded">{contact.relation}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleCall(contact.phone)} className="w-9 h-9 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 border border-slate-200 hover:bg-slate-200"><Phone size={16} /></button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white shadow-green-200 shadow-md hover:bg-green-600"><MessageCircle size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção Representação Legal (COM ZAP E LIGAR) */}
          <div className="bg-slate-200/50 p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3 opacity-70">
              <Scale size={14} className="text-slate-600" />
              <span className="text-xs font-bold text-slate-600 uppercase">Representação Legal</span>
            </div>
            {patientData.emergencyContacts.slice(2, 4).map((contact, idx) => (
              <div key={idx} className="mb-3 last:mb-0 border-b last:border-0 border-slate-300/50 pb-2 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-700 text-xs">{contact.name}</p>
                    <p className="text-[10px] text-slate-500">{contact.relation}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleCall(contact.phone)} className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-300 hover:bg-slate-50">Ligar</button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="text-xs font-bold text-white bg-green-500 px-3 py-1.5 rounded-md shadow-sm hover:bg-green-600 flex items-center gap-1"><MessageCircle size={12} /> Zap</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- INFO CLINICA --- */}
        <div className="grid grid-cols-2 gap-3 mt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Diagnósticos */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope size={16} className="text-blue-500" />
              <h3 className="font-bold text-slate-700 text-sm">Diagnósticos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {patientData.personalInfo.conditions.map((cond, i) => (
                <span key={i} className="bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-blue-100">
                  {cond}
                </span>
              ))}
            </div>
          </div>

          {/* Alergias */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert size={16} className="text-green-600" />
              <h3 className="font-bold text-slate-700 text-sm">Alergias</h3>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              {patientData.medicalInfo.allergies[0]}
            </p>
          </div>
        </div>

        {/* --- MEDICAMENTOS --- */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Pill size={16} className="text-teal-600" />
              <h3 className="font-bold text-slate-700 text-sm">Medicação Contínua</h3>
            </div>
            <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded font-bold">Diário</span>
          </div>
          <div className="space-y-3">
            {patientData.medicalInfo.medications.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                <div>
                  <p className="font-bold text-slate-700 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.dosage}</p>
                </div>
                <Clock size={14} className="text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-6 pb-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Healer ID System v2.0</p>
        </div>

      </div>

      {/* --- BOTÃO FLUTUANTE SOS --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:192" className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors border-2 border-white ring-2 ring-red-200">
          <Ambulance size={24} />
        </a>
      </div>

    </div>
  );
};

export default Home;