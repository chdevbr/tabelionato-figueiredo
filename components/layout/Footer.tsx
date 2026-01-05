"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  User,
  Building2,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/97 text-slate-300 relative overflow-hidden font-sans border-t border-red-900/50">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80 shadow-[0_0_20px_rgba(220,38,38,0.6)]"></div>

      <div className="container mx-auto px-6 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
                <span className="w-1 h-4 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
                Informações de Contato
              </h4>

              <ul className="space-y-4">
                {/* 1. Endereço */}
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-900/30 group-hover:text-red-400 group-hover:border-red-500/30 transition-all duration-300 shadow-lg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1 text-xs uppercase tracking-wide">
                      Endereço
                    </span>
                    <span className="text-slate-400 text-sm leading-relaxed block group-hover:text-slate-200 transition-colors">
                      Av. Antônio de Goes, 449, Pina, Recife - PE
                    </span>
                  </div>
                </li>

                {/* 2. Horário */}
                <li className="flex items-start gap-3 group">
                  <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-900/30 group-hover:text-red-400 group-hover:border-red-500/30 transition-all duration-300 shadow-lg">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1 text-xs uppercase tracking-wide">
                      Funcionamento
                    </span>
                    <span className="text-slate-400 text-sm block group-hover:text-slate-200 transition-colors">
                      Segunda a Sexta:{" "}
                      <span className="text-red-500 font-medium">
                        09:00h às 17:00h
                      </span>
                    </span>
                  </div>
                </li>

                {/* 3. E-mail */}
                <li className="flex items-center gap-3 group">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-900/30 group-hover:text-red-400 group-hover:border-red-500/30 transition-all duration-300 shadow-lg">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-white font-medium mb-0.5 text-xs uppercase tracking-wide">
                      E-mail
                    </span>
                    <a
                      href="mailto:contato@8oficio.com.br"
                      className="text-slate-400 text-sm hover:text-white transition-colors"
                    >
                      contato@8oficio.com.br
                    </a>
                  </div>
                </li>

                {/* 4. Telefone Fixo */}
                <li className="flex items-center gap-3 group">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 group-hover:bg-red-900/30 group-hover:text-red-400 group-hover:border-red-500/30 transition-all duration-300 shadow-lg">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-xs uppercase tracking-wide mb-0.5">
                      Telefone
                    </span>
                    <span className="text-slate-400 text-sm hover:text-white transition-colors">
                      (81) 3073-0800
                    </span>
                  </div>
                </li>

                {/* 5. WhatsApp */}
                <li className="flex items-center gap-3 group pt-1">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-900/80 border border-slate-800 text-green-500 flex items-center justify-center group-hover:bg-green-900/20 group-hover:border-green-500/30 group-hover:text-green-400 transition-all duration-300 shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Phone size={16} className="relative z-10" />
                  </div>
                  <a
                    href="https://wa.me/5581999075484"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col group/link"
                  >
                    <span className="text-white font-bold text-xs uppercase tracking-wide mb-0.5 group-hover/link:text-green-400 transition-colors">
                      WhatsApp
                    </span>
                    <span className="text-slate-400 text-sm group-hover/link:text-white transition-colors">
                      (81) 99907-5484
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex gap-3 pt-3 border-t border-slate-900">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  // Ícones sociais menores
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-red-900/30 hover:text-white hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos (Ocupa 3 espaços) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-1 h-4 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
              Acesso Rápido
            </h4>
            <ul className="space-y-2">
              {[
                "Sobre Nós",
                "Fale Conosco",
                "Onde Estamos",
                "Política de Privacidade",
                "Corregedoria",
                "Tabela de Custas",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 group py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-red-500 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: Dados Institucionais (Ocupa 5 espaços) */}
          <div className="lg:col-span-5">
            <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-3">
              <span className="w-1 h-4 bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
              Dados Institucionais
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-red-500/30 hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:scale-105 transition-all duration-300 shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5">
                    CNPJ
                  </p>
                  <p className="text-slate-200 font-mono tracking-wide text-sm group-hover:text-white transition-colors">
                    11.690.427/0001-85
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-red-500/30 hover:bg-slate-900/60 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:scale-105 transition-all duration-300 shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-0.5">
                    Titular
                  </p>
                  <p className="text-slate-100 font-bold text-base group-hover:text-white transition-colors">
                    Ivanildo Figueiredo
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-[10px] text-red-600 font-bold uppercase tracking-wide">
                      Tabelião
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3 p-2 rounded-lg bg-slate-900/20 border border-dashed border-slate-800 text-slate-500 text-xs">
                <ShieldCheck size={14} className="text-green-500/70" />
                <span>Site protegido (SSL).</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {currentYear}{" "}
            <strong className="text-slate-300 hover:text-white transition-colors">
              Tabelionato Figueiredo
            </strong>
            . Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-900 rounded-full border border-slate-800">
            <span>Desenvolvido por</span>
            <span className="text-red-600 font-bold tracking-wide">CHDEV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}