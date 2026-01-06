"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Scale,
  FileText,
  Laptop,
  Star,
  Building,
  Search,
  User,
} from "lucide-react";

const MENU_DATA = {
  oCartorio: {
    title: "O Cartório",
    sections: [
      {
        title: "Institucional",
        items: [
          { label: "O Tabelião", href: "/cartorio#tabeliao" },
          { label: "A Missão", href: "/cartorio#missao" },
          { label: "O Notariado Latino", href: "/cartorio#notariado" },
          { label: "Galeria de Fotos", href: "/cartorio#galeria" },
          { label: "Localização", href: "/contato" },
          { label: "Transparência", href: "/transparencia" },
          { label: "Política de Privacidade", href: "/politica" },
        ],
      },
      {
        title: "Atendimento",
        items: [
          "Agendamento",
          "Abertura de Protocolo",
          "Ouvidoria",
          "Contato",
          "Mapa do Site",
        ],
      },
      {
        title: "Consultas & Buscas",
        items: [
          "Certidões",
          "Firmas Registradas",
          "Tabela de Emolumentos",
          "Orçamento de Serviços",
          "Pergunte ao Tabelião",
        ],
      },
      {
        title: "Legislação",
        items: [
          "Constituição e Leis",
          "Código de Normas",
          "Provimentos CNJ/CGJ",
          "Normas Estaduais/Federais",
        ],
      },
    ],
  },
  servicos: {
    title: "Serviços",
    sections: [
      {
        title: "Notariais",
        items: [
          { label: "Abertura de Firma", href: "/servicos/abertura-de-firma" },
          { label: "Ata Notarial", href: "/servicos/ata-notarial" },
          { label: "Autenticação", href: "/servicos/autenticacao" },
          {
            label: "Divórcio/Inventário",
            href: "/servicos/divorcio-inventario-extrajudicial",
          },
          {
            label: "Escrituras Imobiliárias",
            href: "/servicos/escrituras-imobiliarias",
          },
          { label: "Procuração Pública", href: "/servicos/procuracao-publica" },
          {
            label: "Reconhecimento de Firma",
            href: "/servicos/reconhecimento-de-firma",
          },
          { label: "Testamento Público", href: "/servicos/testamento-publico" },
          { label: "Dissolução/União Estável", href: "/servicos/dissolucao-uniao-estavel" },
          { label: "Usucapião", href: "/servicos/usucapiao" },
        ],
      },
      {
        title: "Digitais (e-Notariado)",
        items: [
          { 
            label: "Assinatura Digital",
            href: "/servicos/assinatura-digital",
          },
          {
            label: "Ato Notarial Eletrônico",
            href: "/servicos/ato-notarial-eletronico",
          },
          {
            label: "Certificado Digital",
            href: "/servicos/certificado-digital",
          },
          {
            label: "Escritura Digital",
            href: "/servicos/escritura-eletronica",
          },
          {
            label: "Procuração Digital",
            href: "/servicos/procuracao-eletronica",
          },
          {
            label: "Reconhecimento Digital",
            href: "/servicos/reconhecimento-firma-digital",
          },
          { 
            label: "Videoconferência", 
            href: "/servicos/videoconferencia",
          },
        ],
      },
      {
        title: "Serviços Especiais",
        // icon: <Star ... />
        items: [
          { label: "Apostila de Haia", href: "/servicos/apostila-de-haia" },
          { label: "Atos Empresariais", href: "/servicos/atos-empresariais" },
          {
            label: "Conciliação e Mediação",
            href: "/servicos/conciliacao-e-mediacao",
          },
          {
            label: "Condomínio/Incorporações",
            href: "/servicos/condominio-e-incorporacoes",
          },
          {
            label: "Planejamento Sucessório",
            href: "/servicos/planejamento-sucessorio",
          },
          {
            label: "Diretiva Antecipada",
            href: "/servicos/diretiva-antecipada",
          },
        ],
      },
    ],
  },
  areasExclusivas: {
    title: "Advogados & Empresas",
    sections: [
      {
        title: "Sala do Advogado",
        icon: <Scale size={16} className="text-red-500" />,
        items: [
          "Jurisprudência Notarial",
          "Ata Notarial",
          "Carta de Sentença",
          "Divórcio/Inventário",
          "Usucapião",
          "Consultoria Jurídica",
        ],
      },
      {
        title: "Cliente Corporativo",
        icon: <Building size={16} className="text-red-500" />,
        items: [
          "Fatura Eletrônica",
          "Ordem de Serviço",
          "Guia do SICASE",
          "Procuração para Empresa",
          "Acompanhamento de Processos",
          "Malote Digital",
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-slate-900 backdrop-blur-md py-3 border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center relative">
          {/* LOGO */}
          <Link href="/" className="z-50 block shrink-0">
            <Image
              src="/tabelionato-figueiredo/logo.png"
              alt="Tabelionato Figueiredo"
              width={400}
              height={110}
              className={`w-auto object-contain transition-all duration-300 hover:scale-105 filter drop-shadow-sm ${
                scrolled ? "h-10 lg:h-12" : "h-12 lg:h-14"
              }`}
              priority
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            <NavLink href="/">Início</NavLink>

            <NavDropdown
              title="O Cartório"
              id="oCartorio"
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />

            <NavDropdown
              title="Serviços"
              id="servicos"
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />

            <NavDropdown
              title="Para Advogados & Empresas"
              id="areasExclusivas"
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />

            <NavLink href="/contato">Contato</NavLink>
          </div>

          {/* AÇÕES (Direita) */}
          <div className="hidden lg:flex items-center gap-4 z-50">
            <button className="text-slate-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Search size={20} />
            </button>

            <div className="h-6 w-px bg-white/10 mx-1"></div>

            <button className="group relative overflow-hidden flex items-center gap-2 text-slate-200 hover:text-white font-medium text-sm transition-all px-4 py-2.5 rounded-lg border border-white/5 hover:bg-white/5 hover:border-white/20">
              <span className="relative z-10 flex items-center gap-2">
                <User size={18} />
                Login
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
            </button>

            <button className="group relative overflow-hidden bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-red-900/40 active:scale-95 border border-red-500/30">
              <span className="relative z-10">Cadastro</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
            </button>
          </div>

          {/* HAMBÚRGUER MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-red-500 transition-colors p-2 z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MEGA MENU DESKTOP --- */}
      <div
        className={`absolute top-full left-0 w-full bg-slate-900 border-t-2 border-red-600 shadow-2xl transition-all duration-300 overflow-hidden ${
          activeMenu
            ? "max-h-[550px] opacity-100 py-10"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div
          className="container mx-auto px-6"
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          {activeMenu === "oCartorio" && (
            <MegaMenuContent data={MENU_DATA.oCartorio} cols={4} />
          )}
          {activeMenu === "servicos" && (
            <MegaMenuContent data={MENU_DATA.servicos} cols={3} />
          )}
          {activeMenu === "areasExclusivas" && (
            <MegaMenuContent data={MENU_DATA.areasExclusivas} cols={3} />
          )}
        </div>
      </div>

      {/* --- MENU MOBILE --- */}
      <div
        className={`fixed inset-0 bg-slate-950 z-40 transition-transform duration-300 lg:hidden pt-24 px-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 pb-10">
          <MobileLink href="/">Início</MobileLink>
          <MobileAccordion title="O Cartório" data={MENU_DATA.oCartorio} />
          <MobileAccordion
            title="Serviços Notariais"
            data={MENU_DATA.servicos}
          />
          <MobileAccordion
            title="Área Exclusiva"
            data={MENU_DATA.areasExclusivas}
          />
          <MobileLink href="/contato">Contato</MobileLink>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium border border-slate-700 hover:bg-slate-700 transition-colors">
              Fazer Login
            </button>
            <button className="w-full bg-red-700 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg">
              Criar Cadastro
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative px-3 py-6 text-sm font-medium text-slate-300 hover:text-white transition-colors group whitespace-nowrap"
    >
      {children}
      <span className="absolute bottom-4 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
}

function NavDropdown({ title, id, activeMenu, setActiveMenu }: any) {
  const isActive = activeMenu === id;
  return (
    <button
      onMouseEnter={() => setActiveMenu(id)}
      aria-expanded={isActive}
      aria-haspopup="true"
      className={`relative px-3 py-6 text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap group after:!content-none before:!content-none ${
        isActive ? "text-white" : "text-slate-300 hover:text-white"
      }`}
    >
      {title}

      <span
        className={`block w-[7px] h-[7px] border-r-[2px] border-b-[2px] border-current transition-all duration-200 ${
          isActive
            ? "rotate-[-135deg] translate-y-[2px]"
            : "rotate-45 mb-[2px] group-hover:translate-y-[2px]"
        }`}
      ></span>

      <span
        className={`absolute bottom-4 left-0 w-full h-[2px] bg-red-600 transition-transform duration-300 origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      ></span>
    </button>
  );
}

function MegaMenuContent({ data, cols }: any) {
  const gridClass =
    cols === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  return (
    <div className={`grid ${gridClass} gap-x-12 gap-y-10`}>
      {data.sections.map((section: any, idx: number) => (
        <div key={idx} className="space-y-4">
          <h4 className="flex items-center gap-2 text-white font-bold text-sm pb-2 border-b border-white/10 uppercase tracking-wider">
            {section.icon && section.icon}
            {section.title}
          </h4>

          <ul className="space-y-2">
            {section.items.map((item: any, i: number) => {
              const label = typeof item === "string" ? item : item.label;
              const href = typeof item === "string" ? "#" : item.href;

              return (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all block py-0.5 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-red-500 transition-all group-hover:w-2"></span>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="text-xl font-medium text-slate-200 block border-l-4 border-transparent pl-4 hover:border-red-500 hover:text-white transition-all"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({ title, data }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-xl font-medium text-slate-200 border-l-4 border-transparent pl-4 hover:border-red-500 hover:text-white py-2 transition-all"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180 text-red-500" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="pl-6 pt-2 space-y-6 bg-slate-900/50 mt-2 p-4 rounded-lg border border-white/5">
          {data.sections.map((sec: any, idx: number) => (
            <div key={idx}>
              <h5 className="text-red-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                {sec.icon} {sec.title}
              </h5>
              <ul className="space-y-2 border-l border-slate-700 pl-3">
                {sec.items.map((item: any, i: number) => {
                  const label = typeof item === "string" ? item : item.label;
                  const href = typeof item === "string" ? "#" : item.href;

                  return (
                    <li key={i}>
                      <Link
                        href={href}
                        className="text-slate-400 text-sm hover:text-white block py-1"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
