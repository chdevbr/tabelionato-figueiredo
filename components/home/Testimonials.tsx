import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    role: "Advogada Imobiliária",
    content:
      "A agilidade do Tabelionato Figueiredo é impressionante. Uso o sistema e-Notariado para as escrituras dos meus clientes e tudo flui perfeitamente. O atendimento pelo WhatsApp é um diferencial.",
    stars: 5,
  },
  {
    name: "Ricardo Oliveira",
    role: "Empresário",
    content:
      "Precisava de uma procuração urgente e consegui resolver tudo por videochamada. A equipe foi super atenciosa e me guiou em cada passo. Recomendo demais pela modernidade.",
    stars: 5,
  },
  {
    name: "Fernanda Alves",
    role: "Cliente Pessoa Física",
    content:
      "Sempre tive pavor de ir em cartório por causa das filas, mas o atendimento aqui é outro nível. O ambiente é confortável e o reconhecimento de firma foi muito rápido.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    // MUDANÇA 1: Fundo base agora é Slate-950 (quase preto/azulado)
    <section className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* --- EFEITOS DE FUNDO (DESIGN) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* MUDANÇA 2: Gradiente agora é tons de Slate, não mais Vermelho total */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black"></div>

        {/* Padrão de cubos (Mantido) */}
        <div
          className="absolute inset-0 opacity-[0.05]" // Opacidade reduzida para ficar sutil no escuro
          style={{
            backgroundImage: "url('/cubes.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        ></div>

        {/* MUDANÇA 3: Luzes Ambientais - Mantive Vermelhas para dar o "detalhe" que você pediu */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          {/* Badge com detalhe vermelho sutil */}
          <span className="text-red-400 font-bold tracking-widest text-xs uppercase bg-slate-900/50 px-3 py-1 rounded-full border border-red-500/20 backdrop-blur-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            A confiança de quem <br /> já foi atendido
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              // MUDANÇA 4: Card base Slate. 
              // Hover: Borda vermelha e brilho vermelho, mas sem encher o fundo de vermelho sólido.
              className="
                bg-slate-900/40 backdrop-blur-md 
                border border-slate-800 
                p-8 rounded-2xl 
                transition-all duration-300 group 
                hover:border-red-500/50 
                hover:bg-slate-900/80 
                hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)] 
                hover:-translate-y-2
              "
            >
              {/* Aspas - Vermelho vibrante */}
              <div className="mb-6 text-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
                <Quote size={40} className="fill-current" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-slate-400 leading-relaxed mb-6 italic transition-colors duration-300 group-hover:text-slate-200">
                "{item.content}"
              </p>

              {/* Autor */}
              <div className="border-t border-slate-800 pt-6 flex items-center gap-4 group-hover:border-red-500/20 transition-colors">
                {/* Avatar com gradiente vermelho */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-slate-900 flex items-center justify-center text-white font-bold text-sm border border-slate-700 group-hover:border-red-500 transition-colors">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-slate-500 text-sm font-medium group-hover:text-red-400 transition-colors">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}