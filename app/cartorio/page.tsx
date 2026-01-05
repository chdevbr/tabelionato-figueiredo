import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import PhotoGallery from "@/components/ui/PhotoGallery";

import {
  ShieldCheck,
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  ExternalLink,
  Camera,
  Scale,
  BookOpen,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "O Cartório | 8º Ofício de Notas",
  description:
    "Nossa missão, o Tabelião Ivanildo Figueiredo e nossa estrutura.",
};

export default function CartorioPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Institucional"
        subtitle="Tradição, Ética e Segurança Jurídica"
      />

      {/* --- SEÇÃO 1: A MISSÃO (TEXTO INTEGRAL - MANTIDO) --- */}
      <section id="missao" className="py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-16 space-y-8 text-slate-800 text-lg leading-relaxed">
            <div className="text-center mb-10">
              <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                Nossa Missão Institucional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Compromisso com a Segurança Jurídica
              </h2>
            </div>

            <p>
              A missão do <strong>Tabelionato Figueiredo</strong> consiste em
              prestar serviços jurídicos destinados a resolver e atender as
              demandas das pessoas que necessitam da formalização dos atos
              legais de sua vida civil, relativos à capacidade, prova de fatos,
              obrigações e contratos, direitos imobiliários e relações de
              família e de sucessões, ou seja, de todos os atos jurídicos do
              nascimento até o falecimento.
            </p>

            <p>
              O Tabelião, substitutos e prepostos do Tabelionato Figueiredo,{" "}
              <strong>todos formados em Direito</strong>, analisam os
              documentos, redigem e elaboram os instrumentos para a regulação
              dos atos civis, sempre observando os mais rígidos padrões de
              segurança jurídica, celeridade e eficiência operacional.
            </p>

            <p className="bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm italic text-slate-700">
              Visando cumprir sua missão institucional, exercida como atividade
              extrajudicial delegada pelo Poder Judiciário do Estado de
              Pernambuco, e submetida à fiscalização da{" "}
              <strong>Corregedoria Geral da Justiça</strong>, o Tabelionato
              Figueiredo sempre assumiu como compromisso, perante seus clientes
              e o público em geral:
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
            <MissionPoint number="1">
              Formalizar e reproduzir, fielmente, as declarações de vontade,
              sempre de acordo com os interesses das partes, ao lavrar as
              escrituras, testamentos, procurações e demais atos notariais de
              jurisdição voluntária previstos no Código Civil e nas leis.
            </MissionPoint>
            <MissionPoint number="2">
              Observar os princípios da Constituição da República e as normas
              legais que devem prevalecer sobre as disposições particulares,
              como garantia da legalidade e segurança jurídica dos atos
              notariais praticados sob sua responsabilidade.
            </MissionPoint>
            <MissionPoint number="3">
              Resolver e solucionar os problemas jurídicos da vida civil
              demandados pelas pessoas maiores, capazes e por mútuo consenso,
              atuando também como mediador, exercendo ação preventiva, para
              assim evitar possíveis litígios judiciais.
            </MissionPoint>
            <MissionPoint number="4">
              Orientar, com isenção e imparcialidade, as partes contratantes,
              sugerindo as regras contratuais, medidas e procedimentos que
              melhor atendam aos interesses das partes e à natureza do negócio
              jurídico.
            </MissionPoint>
            <MissionPoint number="5">
              Conferir fé pública aos atos e documentos privados, garantindo,
              assim, que estes cumpram a sua finalidade essencial de provar a
              existência válida de negócios jurídicos celebrados sob a
              supervisão técnica do Tabelião e do profissional notarial.
            </MissionPoint>
            <MissionPoint number="6">
              Certificar a existência de fatos e relações jurídicas privadas,
              através de documentos reconhecidos e protegidos pela fé pública,
              especialmente na lavratura de atas notariais, verificação da
              autenticidade de documentos físicos e digitais e escrituras
              destinadas à produção de provas em Juízo.
            </MissionPoint>
            <MissionPoint number="7">
              Exercer as suas atribuições notariais sob a égide do
              profissionalismo e da responsabilidade técnica, orientado pelos
              princípios da ética, da seriedade e da lealdade nas relações com
              os clientes e usuários dos seus serviços, acima de qualquer
              interesse mercantilista ou estritamente remuneratório.
            </MissionPoint>
            <MissionPoint number="8">
              Manter e guardar, com absoluta segurança, os livros contendo os
              atos notariais lavrados, em arquivos físicos e digitais,
              garantindo, assim, a perpetuação dos atos formalizados, ficando
              estes atos a salvo de perdas, extravios ou deterioração, e sempre
              disponíveis para consulta a qualquer tempo, quando requisitados.
            </MissionPoint>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: HISTÓRIA E TABELIÃO (MANTIDO) --- */}
      <section
        id="tabeliao"
        className="py-24 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              O Legado
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Da fundação em 1957 à modernização.
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Criado pelo TJPE em 1957 (antigo Cartório Hélio Coutinho), o 8º
              Ofício iniciou uma nova era em <strong>2000</strong>. Através do
              Ato nº 1.465/2000, o Dr. Ivanildo Figueiredo assumiu a
              titularidade, tornando-se o{" "}
              <strong>primeiro tabelião de Pernambuco</strong> investido por
              concurso público de provas e títulos sob o regime da Constituição
              de 1988. Nascia o atual Tabelionato Figueiredo.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left sticky top-32">
              <div className="w-56 h-56 mb-6 relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-600 group">
                <Image
                  src="/tabeliao.jpg"
                  alt="Dr. Ivanildo Figueiredo"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-700 font-medium p-4 -z-10">
                  <Camera size={32} className="mb-2 opacity-50" />
                  <span>Foto Dr. Ivanildo</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ivanildo Figueiredo
              </h2>
              <p className="text-red-400 font-medium mb-6">
                Tabelião Titular (Desde 2000)
              </p>

              <a
                href="http://lattes.cnpq.br/1040210205683006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors shadow-lg shadow-red-900/20"
              >
                Currículo Lattes Completo <ExternalLink size={16} />
              </a>
            </div>

            <div className="w-full md:w-2/3 space-y-8">
              <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
                <h3 className="flex items-center gap-2 font-bold text-white mb-6 pb-2 border-b border-slate-700">
                  <GraduationCap className="text-red-500" size={24} /> Formação
                  & Docência
                </h3>
                <ul className="space-y-4 text-slate-300">
                  <ListItemDark
                    title="Pós-Doutor em Direito Comercial (USP)"
                    subtitle="Doutor e Mestre em Direito (UFPE)."
                  />
                  <ListItemDark
                    title="Professor da Faculdade de Direito do Recife (UFPE)"
                    subtitle="Desde 1997. Atual Vice-Diretor do Centro de Ciências Jurídicas."
                  />
                  <ListItemDark
                    title="Coordenador Acadêmico"
                    subtitle="Escola Judicial do TJPE (ESMAPE)."
                  />
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="flex items-center gap-2 font-bold text-white mb-4 text-sm uppercase tracking-wide">
                    <Briefcase className="text-red-500" size={20} /> Trajetória
                    Pública
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li>• Ex-Procurador do Estado de PE (Concursado)</li>
                    <li>• Ex-Secretário de Administração do Estado</li>
                    <li>• Ex-Chefe do Centro de Estudos Jurídicos da PGE</li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="flex items-center gap-2 font-bold text-white mb-4 text-sm uppercase tracking-wide">
                    <Award className="text-red-500" size={20} /> Associações &
                    Obras
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li>• União Internacional do Notariado (UINL)</li>
                    <li>• Academia Notarial Americana (ANA)</li>
                    <li>
                      • Autor de "Direito Imobiliário" e "Teoria Crítica da
                      Empresa"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: GALERIA DE FOTOS (CARROSSEL) --- */}
      <section
        id="galeria"
        className="py-20 bg-slate-50 scroll-mt-20 border-b border-slate-200"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-red-600 font-bold tracking-widest text-xs uppercase mb-2 block">
              Nossa Estrutura
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Galeria de Fotos
            </h2>
          </div>

          <div className="w-full">
            <PhotoGallery />
          </div>

          <p className="text-center text-slate-500 text-sm mt-6 italic">
            Instalações modernas no coração do Recife, projetadas para o seu
            conforto e privacidade.
          </p>
        </div>
      </section>

      {/* --- SEÇÃO 4: O NOTARIADO LATINO (TEXTO ENXUGADO E APLICADO) --- */}
      <section
        id="notariado"
        className="py-24 bg-slate-900 relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="w-16 h-16 mx-auto bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={32} />
            </div>
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              Sistema Jurídico Mundial
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notariado Latino (Civil Law)
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              A gênese do sistema jurídico adotado no Brasil, com raízes no
              Direito Romano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Origem */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="text-red-500" size={24} />
                <h3 className="text-white font-bold text-lg">Origem Romana</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Raízes no século V a.C. O sistema <em>Civil Law</em> é adotado
                por toda a América Latina e Europa continental (França, Itália,
                Alemanha). Difere do modelo anglo-saxão (<em>Common Law</em>) de
                países como EUA e Inglaterra, onde a lei escrita tem papel
                secundário.
              </p>
            </div>

            {/* Card 2: Papel do Tabelião */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-red-500" size={24} />
                <h3 className="text-white font-bold text-lg">
                  Intérprete da Lei
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                No Brasil, o Tabelião é um profissional do direito fiscalizado
                pelo <strong>CNJ</strong>. Ele atua como intérprete do Código
                Civil, formalizando a vontade das pessoas do nascimento ao
                falecimento (inventários, divórcios, testamentos e contratos).
              </p>
            </div>

            {/* Card 3: Contexto Global */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-red-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-red-500" size={24} />
                <h3 className="text-white font-bold text-lg">
                  Presença Global
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                No século XXI, o sistema é dominante no mundo globalizado,
                adotado por mais de <strong>90 países</strong> da União
                Internacional do Notariado (UINL), incluindo potências
                econômicas como a <strong>China e a Rússia</strong>.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-300 text-sm font-medium">
              <Scale size={16} />
              <span>
                Segurança jurídica essencial para famílias e empresas no mundo
                moderno.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MissionPoint({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-red-200 hover:shadow-md transition-all group">
      <div className="shrink-0">
        <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
          {number}
        </div>
      </div>
      <div className="text-slate-700 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </div>
  );
}

function ListItemDark({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <li className="flex flex-col md:flex-row md:items-baseline md:gap-2 border-l-2 border-red-500/30 pl-4 py-1 hover:border-red-500 transition-colors">
      <span className="font-bold text-white text-base">{title}</span>
      <span className="text-slate-400 text-sm">{subtitle}</span>
    </li>
  );
}