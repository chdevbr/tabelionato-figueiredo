"use client";

import React, { useState } from "react";
import { MapPin, Mail, Send, Phone, Eraser } from "lucide-react"; // Adicionei Eraser
import { toast } from "sonner";

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // --- FUNÇÃO DE MÁSCARA CORRIGIDA ---
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    const size = numbers.length;

    if (size > 11) return formatPhone(numbers.slice(0, 11));

    if (size <= 2) return `(${numbers}`;
    if (size <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (size <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(
        6
      )}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
      7
    )}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "name") {
      if (value !== "" && !/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
        return;
      }
    }

    if (id === "phone") {
      if (value === "") {
        setFormData((prev) => ({ ...prev, [id]: "" }));
        return;
      }

      const formatted = formatPhone(value);
      setFormData((prev) => ({ ...prev, [id]: formatted }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // --- NOVA FUNÇÃO: LIMPAR CAMPOS ---
  const handleClear = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    toast.info("Campos limpos", { duration: 2000 });
  };

  const handleSendToWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || formData.phone.length < 14) {
      toast.error("Dados incompletos", {
        description:
          "Por favor, preencha um Nome válido e um Telefone completo.",
        duration: 4000,
      });
      if (formData.phone.length < 14) document.getElementById("phone")?.focus();
      if (!formData.name) document.getElementById("name")?.focus();
      return;
    }

    toast.success("Tudo certo!", {
      description: "Abrindo o WhatsApp...",
      duration: 5000,
    });

    const phoneNumber = "5581986605157";

    const text = `
*Olá! Vim pelo site do Tabelionato.*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}

*Mensagem:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FORMULÁRIO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Fale Conosco Agora
              </h2>
              <p className="text-slate-500">
                Preencha os dados abaixo para ser atendido diretamente pelo
                nosso WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendToWhatsapp} className="space-y-5">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 ml-1"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: João da Silva"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white text-slate-700 placeholder-slate-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-700 ml-1"
                  >
                    Celular (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(81) 99999-9999"
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white text-slate-700 placeholder-slate-400"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 ml-1"
                  >
                    E-mail (Opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white text-slate-700 placeholder-slate-400"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700 ml-1"
                >
                  Assunto / Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Gostaria de saber o valor da escritura..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all bg-white text-slate-700 placeholder-slate-400 resize-none"
                ></textarea>
              </div>

              {/* GRUPO DE BOTÕES: ENVIAR + LIMPAR */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Botão Enviar (Verde Principal) */}
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-green-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar para o WhatsApp
                </button>

                {/* BOTÃO LIMPAR (Vermelho Sólido com Transição Física) */}
                <button
                  type="button"
                  onClick={handleClear}
                  className="group w-full sm:w-auto px-6 bg-red-700 text-white border border-red-800 font-bold py-4 rounded-lg shadow-md transition-all duration-300 hover:bg-red-600 hover:border-red-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/30 active:translate-y-0 active:scale-95 flex items-center justify-center gap-2"
                  title="Limpar formulário"
                >
                  <Eraser
                    size={20}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />

                  <span className="sm:hidden">Limpar</span>
                </button>
              </div>
            </form>
          </div>

          {/* MAPA E ENDEREÇO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Onde Estamos
              </h2>
              <p className="text-slate-500">
                Visite-nos pessoalmente no nosso endereço empresarial.
              </p>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="rounded-xl overflow-hidden h-64 md:h-80 bg-slate-200 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.134471931566!2d-34.88744952594531!3d-8.087766180867726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f38a23f605b%3A0xf21cbe4340a5c25c!2sAv.%20Ant%C3%B4nio%20de%20G%C3%B3es%2C%20449%20-%20Pina%2C%20Recife%20-%20PE%2C%2051110-000!5e0!3m2!1spt-BR!2sbr!4v1767459001859!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                      Endereço
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Av. Antônio de Góes, 449, Empresarial Newton Melo
                      <br />
                      Pina - Recife / PE
                      <br />
                      CEP: 51110-000
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">
                      E-mail
                    </h4>
                    <p className="text-slate-600 text-sm">
                      contato@tabelionatofigueiredo.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
