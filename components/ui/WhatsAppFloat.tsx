"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, CalendarDays } from "lucide-react"; // Ícones do alerta

export default function WhatsAppFloat() {
  const [isOnline, setIsOnline] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Estado do Modal

  useEffect(() => {
    setMounted(true); // Garante que o componente montou no cliente

    const checkAvailability = () => {
      const now = new Date();
      // Sua lógica de fuso horário de Recife (Perfeita!)
      const recifeTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Recife" })
      );

      const day = recifeTime.getDay();
      const hour = recifeTime.getHours();

      // Segunda(1) a Sexta(5) das 09:00 as 16:59
      const isWeekDay = day >= 1 && day <= 5;
      const isWorkingHour = hour >= 9 && hour < 17;

      setIsOnline(isWeekDay && isWorkingHour);
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  // Intercepta o clique se estiver offline
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isOnline) {
      e.preventDefault(); // Bloqueia a abertura do WhatsApp
      setShowAlert(true); // Abre o alerta
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* --- 1. MODAL DE ALERTA (APARECE SE CLICAR OFFLINE) --- */}
      {showAlert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Cabeçalho */}
            <div className="bg-red-50 p-6 text-center border-b border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Atendimento Indisponível
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                No momento não estamos online.
              </p>
            </div>
            {/* Corpo */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-slate-600 text-sm bg-slate-50 p-4 rounded-xl">
                <CalendarDays className="shrink-0 text-slate-400" size={20} />
                <p>
                  Nosso horário de atendimento online é de{" "}
                  <strong className="text-slate-900">Segunda a Sexta</strong>,
                  das <strong className="text-slate-900">09:00 às 17:00</strong>
                  .
                </p>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95"
              >
                Entendi, voltarei depois
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- 2. BOTÃO FLUTUANTE --- */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 group">
        {/* TOOLTIP (Desktop) */}
        <div
          className="hidden md:block absolute right-[70px] top-1/2 -translate-y-1/2 
                        bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl 
                        shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100/50
                        opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-500 ease-out pointer-events-none"
        >
          <div className="text-right">
            <p className="text-slate-800 font-bold text-sm whitespace-nowrap leading-tight">
              Falar com Atendente
            </p>

            <span
              className={`text-[11px] font-medium flex items-center justify-end gap-1.5 mt-0.5 
                                ${
                                  isOnline ? "text-green-600" : "text-red-500"
                                }`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 
                                    ${
                                      isOnline ? "bg-green-400" : "bg-red-400"
                                    }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 
                                    ${
                                      isOnline ? "bg-green-500" : "bg-red-500"
                                    }`}
                ></span>
              </span>
              {isOnline ? "Online agora" : "Offline"}
            </span>
          </div>
        </div>

        {/* BOTÃO PRINCIPAL */}
        <div className="relative">
          <div
            className={`absolute -inset-2 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 
                          ${
                            isOnline
                              ? "bg-green-500/30 animate-pulse"
                              : "bg-red-500/10"
                          }`}
          ></div>

          <Link
            href="https://wa.me/5581999075484"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`relative flex items-center justify-center w-16 h-16 rounded-full 
                       border-2 border-white/20 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)]
                       transform transition-all duration-300 ease-out
                       hover:scale-110 hover:-translate-y-1 active:scale-95
                       ${
                         isOnline
                           ? "bg-gradient-to-br from-[#25D366] to-[#075E54] hover:shadow-[0_20px_35px_-10px_rgba(37,211,102,0.6)]"
                           : "bg-slate-700 hover:bg-slate-600 grayscale-[0.5]"
                       }`}
            aria-label="Falar no WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="white"
              className="drop-shadow-sm"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>

            {isOnline ? (
              <span className="absolute top-0.5 right-0.5 h-4 w-4 bg-red-500 border-2 border-white rounded-full drop-shadow-sm"></span>
            ) : (
              <span className="absolute top-0.5 right-0.5 h-4 w-4 bg-slate-400 border-2 border-white rounded-full drop-shadow-sm"></span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}