import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { 
  FileText, 
  Laptop, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Nossos Serviços | 8º Ofício de Notas",
  description: "Consulte a lista completa de serviços notariais, digitais e especiais.",
};

const SERVICE_CATEGORIES = [
  {
    id: "notariais",
    title: "Atos Notariais",
    description: "Os serviços tradicionais do cartório, realizados com a segurança jurídica e a fé pública que você já conhece.",
    icon: <FileText size={32} />,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    items: [
      "Abertura de Firma",
      "Ata Notarial",
      "Autenticação",
      "Divórcio/Inventário Extrajudicial",
      "Escrituras Imobiliárias",
      "Procuração Pública",
      "Reconhecimento de Firma",
      "Testamento Público",
      "União Estável",
      "Usucapião",
    ]
  },
  {
    id: "digitais",
    title: "Digitais (e-Notariado)",
    description: "A modernidade chegou ao cartório. Realize atos inteiramente online com certificação digital e videoconferência.",
    icon: <Laptop size={32} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    items: [
      "Assinatura Digital",
      "Ato Notarial Eletrônico",
      "Certificado Digital",
      "Escritura Eletrônica",
      "Procuração Eletrônica",
      "Reconhecimento Firma Digital",
      "Videoconferência",
    ]
  },
  {
    id: "especiais",
    title: "Serviços Especiais",
    description: "Soluções corporativas, mediação de conflitos e atos internacionais para atender demandas específicas.",
    icon: <Star size={32} />,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    items: [
      "Apostila de Haia",
      "Atos Empresariais",
      "Conciliação e Mediação",
      "Condomínio e Incorporações",
      "Planejamento Sucessório",
      "Diretiva Antecipada",
    ]
  }
];

const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\//g, "-") 
    .replace(/\s+/g, "-");
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <PageHeader 
        title="Nossos Serviços" 
        subtitle="Catálogo Completo de Atos" 
      />

      {/* Intro */}
      <section className="py-16 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Como podemos ajudar você hoje?
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          O 8º Ofício de Notas oferece uma gama completa de soluções jurídicas. 
          Abaixo você encontra todos os nossos serviços divididos por categoria para facilitar sua busca.
        </p>
      </section>

      {/* Lista de Categorias */}
      <div className="container mx-auto px-6 space-y-16">
        {SERVICE_CATEGORIES.map((category, idx) => (
          <section key={idx} id={category.id} className="scroll-mt-32">
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8 pb-6 border-b border-slate-200">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${category.bg} ${category.color}`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  {category.title}
                </h3>
                <p className="text-slate-600 max-w-2xl text-lg">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Grid de Itens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((item, i) => {
                const slug = createSlug(item);
                
                return (
                  <Link 
                    key={i}
                    href={`/servicos/${slug}`}
                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-slate-300 group-hover:text-red-500 transition-colors" />
                      <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-600 transition-all opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0">
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Dúvidas / CTA Final */}
      <section className="mt-24 container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
              <HelpCircle className="text-red-500" />
              Não encontrou o que procura?
            </h3>
            <p className="text-slate-300">
              Alguns casos específicos podem exigir uma análise personalizada. 
              Nossa equipe jurídica está pronta para orientar você pelo WhatsApp ou presencialmente.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link 
              href="/contato" 
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-red-900/20 hover:scale-105"
            >
              Falar com Atendente
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}