import React from "react";
import Link from "next/link";
import { MessageSquare, Video, PenTool, CheckCircle2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: <MessageSquare size={28} />,
    title: "1. Solicitação",
    desc: "Entre em contato pelo WhatsApp ou Site. Nossa equipe analisa seus documentos e prepara a minuta.",
  },
  {
    icon: <Video size={28} />,
    title: "2. Videoconferência",
    desc: "Agendamos uma chamada de vídeo rápida com o tabelião para confirmar sua identidade e vontade.",
  },
  {
    icon: <PenTool size={28} />,
    title: "3. Assinatura Digital",
    desc: "Você assina pelo celular usando o aplicativo e-Notariado. É seguro, gratuito e tem validade legal.",
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "4. Tudo Pronto!",
    desc: "Seu documento (escritura ou procuração) é emitido digitalmente e enviado para seu e-mail na hora.",
  },
];

export default function DigitalSteps() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LADO ESQUERDO: Texto Explicativo */}
          <div className="lg:w-1/2 space-y-6">
            <span className="text-red-600 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-red-100 shadow-sm">
              Sem filas, sem papel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Resolva sua vida notarial <br/>
              <span className="text-red-700">sem sair de casa.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              O Tabelionato Figueiredo é pioneiro no atendimento digital. 
              Realize escrituras de compra e venda, procurações, divórcios e 
              inventários através da plataforma <strong>e-Notariado</strong>.
            </p>
            
            <div className="pt-4">
              <Link 
                href="/contato" 
                className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-red-700/20 hover:bg-red-800 hover:-translate-y-1 transition-all duration-300"
              >
                Quero atendimento online
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* LADO DIREITO: Os 4 Passos (Grid) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                {/* Número Gigante de Fundo (Detalhe Design) */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-bold text-slate-100 pointer-events-none group-hover:text-red-50 transition-colors duration-500">
                  {index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}