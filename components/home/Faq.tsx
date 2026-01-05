"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQS = [
  {
    question: "Preciso agendar horário para ser atendido?",
    answer: "Não é necessário agendamento, o atendimento é por ordem de chegada.",
  },
  {
    question: "O atendimento digital (e-Notariado) tem a mesma validade?",
    answer: "Sim! Atos realizados via e-Notariado possuem exatamente a mesma validade jurídica e segurança dos atos presenciais. Eles são assinados com certificado digital e ficam salvos na base nacional.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos dinheiro, PIX, cartões de débito e crédito para serviços acima de R$100,00 (sem possibilidade de parcelamento).",
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos de segunda a sexta-feira, das 09:00 às 17:00, sem fechar para almoço. Aos sábados e domingos não há expediente.",
  },
  {
    question: "Onde o cartório está localizado? Tem estacionamento?",
    answer: "Estamos localizados em um Empresarial no coração de Recife (endereço completo na seção abaixo). O prédio dispõe de estacionamento próprio, oferecendo total segurança e comodidade durante seu atendimento.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Cabeçalho do FAQ */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-slate-500 font-bold tracking-widest text-xs uppercase bg-slate-100 px-3 py-1 rounded-full">
            <HelpCircle size={14} />
            Dúvidas Comuns
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-lg">
            Separamos as principais dúvidas para te ajudar a ganhar tempo.
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? "border-red-500/30 bg-red-50/30 shadow-sm" 
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${
                  openIndex === index ? "text-red-700" : "text-slate-800"
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${
                  openIndex === index ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-400"
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}