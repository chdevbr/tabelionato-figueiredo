import React from "react";
import Link from "next/link";
import {
  FileSignature,
  Scroll,
  Stamp,
  Scale,
  FileCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: <FileSignature size={30} />,
    title: "Reconhecimento de Firma",
    desc: "Ateste a autoria da assinatura em documentos por semelhança ou autenticidade.",
    link: "/servicos/reconhecimento-de-firma",
  },
  {
    icon: <Scroll size={30} />,
    title: "Escrituras Públicas",
    desc: "Segurança jurídica total para compra e venda de imóveis, doações e permutas.",
    link: "/servicos/escrituras",
  },
  {
    icon: <FileCheck size={30} />,
    title: "Procurações",
    desc: "Nomeie representantes legais para agir em seu nome com validade nacional.",
    link: "/servicos/procuracoes",
  },
  {
    icon: <Scale size={30} />,
    title: "Divórcio e Inventário",
    desc: "Soluções extrajudiciais rápidas realizadas diretamente no cartório.",
    link: "/servicos/divorcio-inventario",
  },
  {
    icon: <Stamp size={30} />,
    title: "Ata Notarial",
    desc: "Prova pré-constituída de fatos (mensagens, posts) para uso em processos judiciais.",
    link: "/servicos/ata-notarial",
  },
  {
    icon: <Building2 size={30} />,
    title: "Atos Empresariais",
    desc: "Autenticações e atas exclusivas para pessoas jurídicas e empresas.",
    link: "/servicos/empresas",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-white">
      
      {/* REMOVIDO: O div com efeito de blur que causava a névoa branca */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 font-bold tracking-widest text-xs uppercase bg-red-100 px-3 py-1 rounded-full border border-red-200">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Soluções completas para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Pessoas e Empresas
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Unimos a fé pública notarial à tecnologia para entregar documentos com agilidade e validade jurídica garantida.
          </p>
        </div>

        {/* GRID DE SERVIÇOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/5"
            >
              {/* Ícone */}
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Texto */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Link Saiba Mais */}
              <div className="flex items-center gap-2 text-sm font-bold text-red-700 group-hover:text-red-800 transition-colors">
                Saiba mais
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* BOTÃO VER TODOS */}
        <div className="mt-16 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Ver todos os serviços
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}