"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  ShieldCheck,
  Globe,
  Zap,
  Video,
  CheckCircle,
  Clock,
  Phone,
} from "lucide-react";

export default function Hero() {
  const [status, setStatus] = useState({
    isOpen: false,
    text: "Verificando horário...",
    color: "bg-gray-500",
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if (day === 0 || day === 5 || day === 6) {
        setStatus({
          isOpen: false,
          text: "Cartório fechado. Retornamos segunda às 09:00.",
          color: "bg-red-500",
        });
      } else if (hour >= 8 && hour < 17) {
        setStatus({
          isOpen: true,
          text: "Cartório aberto hoje até as 17:00",
          color: "bg-green-500",
        });
      } else {
        setStatus({
          isOpen: false,
          text: "Cartório fechado agora. Abrimos às 09:00.",
          color: "bg-red-500",
        });
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-between overflow-hidden bg-slate-900 border-b-4 border-red-800">
      {/* 1. IMAGEM DE FUNDO */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-slate-900/90 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70"></div>
      </div>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center max-w-7xl mx-auto pt-32 pb-12 lg:pt-48 lg:pb-16">
          {/* Lado Esquerdo: Texto e Busca */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            {/* Tag de Segurança */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-900/40 bg-slate-900/50 text-slate-300 text-xs font-medium uppercase tracking-wider backdrop-blur-md transition-all hover:border-red-500/40 hover:text-slate-100">
              <ShieldCheck size={14} className="text-red-500" />
              <span>Segurança Jurídica desde 2000</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-sm">
                8º Ofício de Notas <br /> do Recife
              </span>
              <span className="text-red-600">.</span>
            </h1>

            <p className="text-lg text-slate-300 font-light max-w-xl leading-relaxed border-l-2 border-red-800/50 pl-4">
              Segurança jurídica, agilidade e atendimento de excelência. Realize
              seus atos notariais com a confiança de quem entende,
              presencialmente ou{" "}
              <span className="text-white font-medium">100% digital</span>.
            </p>

            <div className="relative w-full max-w-lg">
              <div className="relative flex items-center p-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl transition-all duration-300 hover:border-slate-700 focus-within:bg-slate-900/95 focus-within:border-red-500/50 shadow-xl">
                <div className="p-3 text-slate-500 transition-colors group-focus-within:text-slate-300">
                  <Search size={22} />
                </div>
                <input
                  type="text"
                  placeholder="O que você precisa hoje?"
                  className="flex-1 bg-transparent border-none outline-none text-slate-200 focus:text-white placeholder-slate-500 font-medium text-base min-w-0 transition-colors"
                />
                <button className="group/btn relative overflow-hidden bg-red-700 text-white px-6 py-3 rounded-lg font-bold shadow-md transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95 shrink-0 ml-2">
                  <span className="relative z-10 tracking-wide text-sm uppercase">
                    Buscar
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex relative h-full w-full justify-center items-center">
            <div className="absolute inset-0 bg-[radial-gradient(#7f1d1d_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
            <div className="absolute bg-red-600/10 w-80 h-80 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-[550px]">
              {/* CARD 1 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-xl hover:-translate-y-2 hover:border-red-500/50 hover:shadow-red-900/20 transition-all duration-300 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-900/30 transition-colors">
                  <Globe
                    size={20}
                    className="text-slate-300 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Integração e-Notariado
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Atos notariais eletrônicos com validade nacional. Assine de
                  qualquer lugar do mundo.
                </p>
              </div>
              {/* CARD 2 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-xl hover:-translate-y-2 hover:border-red-500/50 hover:shadow-red-900/20 transition-all duration-300 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-900/30 transition-colors">
                  <Zap
                    size={20}
                    className="text-slate-300 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Processos Express
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Sistema interno otimizado para reduzir filas e entregar
                  certidões em tempo recorde.
                </p>
              </div>
              {/* CARD 3 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-xl hover:-translate-y-2 hover:border-red-500/50 hover:shadow-red-900/20 transition-all duration-300 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-900/30 transition-colors">
                  <Video
                    size={20}
                    className="text-slate-300 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Atendimento por Vídeo
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Realize escrituras, procurações e divórcios via chamada de
                  vídeo segura e gravada.
                </p>
              </div>
              {/* CARD 4 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-xl hover:-translate-y-2 hover:border-red-500/50 hover:shadow-red-900/20 transition-all duration-300 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-900/30 transition-colors">
                  <CheckCircle
                    size={20}
                    className="text-slate-300 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  Selo Digital
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Tecnologia QR Code em todos os atos para garantir
                  autenticidade contra fraudes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR DE DADOS (Dinâmica e Real) */}
      <div className="relative z-20 w-full bg-slate-950/90 backdrop-blur border-t border-slate-800 py-3">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-slate-400 text-xs md:text-sm">
          <div className="flex items-center gap-2.5 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800">
            <div
              className={`w-2 h-2 rounded-full ${status.color} animate-pulse shadow-[0_0_8px_currentColor]`}
            ></div>
            <span className="font-medium text-slate-300">{status.text}</span>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Zap size={14} className="text-red-500" />
              <span>Agilidade e Eficiência</span>
            </div>
            <span className="w-px h-4 bg-slate-700"></span>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <CheckCircle size={14} className="text-red-500" />
              <span>Atendimento Humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}