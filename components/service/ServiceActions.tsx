"use client";

import React from "react";
import {
  User,
  Smartphone,
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ServiceActions({ slug }: { slug: string }) {
  // Esse componente só aparece na página de abertura de firma
  if (slug !== "abertura-de-firma") return null;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
        Como você deseja abrir sua firma?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* OPÇÃO 1: FIRMA FÍSICA (PRESENCIAL) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-red-200 transition-colors group">
          <div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
              <User size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Firma Física (Cartão)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Para assinar documentos de papel presencialmente. É necessário
              comparecer ao cartório.
            </p>
            <ul className="text-sm text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" /> Atendimento por ordem
                de chegada
              </li>
              <li className="flex items-center gap-2">
                <User size={14} className="shrink-0" /> Leve RG e CPF originais
              </li>
            </ul>
          </div>

          <Link
            href="/contato"
            className="w-full flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm md:text-base hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all"
          >
            Ver Localização
          </Link>
        </div>

        {/* OPÇÃO 2: FIRMA DIGITAL (WHATSAPP DO SETOR) */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Smartphone size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Firma Digital (e-Notariado)
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Para assinar documentos eletrônicos. Fale com nosso setor
              especializado.
            </p>
            <ul className="text-sm text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="shrink-0" /> Certificado
                ICP-Brasil
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} className="shrink-0" /> Videoconferência
                agendada
              </li>
            </ul>
          </div>

          <a
            /* LINK DIRETO PARA O WHATSAPP */
            href="https://wa.me/5581999999999?text=Olá, gostaria de falar com o setor responsável pelo e-Notariado para abrir minha firma digital."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 h-auto min-h-[50px]"
          >
            <span>Falar com setor responsável</span>
            <MessageCircle size={18} className="shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}