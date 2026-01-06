"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const PHOTOS = [
  {
    id: 1,
    src: "/tabelionato-figueiredo/recepcaoterreo.jpg",
    title: "Térreo - Atendimento Geral",
    desc: "Reconhecimento e abertura de firma, autenticações, apostilamento, ata notarial, e-notariado presencial e emissão de certidões.",
  },
  {
    id: 2,
    src: "/tabelionato-figueiredo/recepcao1.jpg",
    title: "1º Andar - Escrituras e Procurações",
    desc: "Setor dedicado à lavratura de escrituras públicas, procurações, inventários, divórcios e demais atos jurídicos complexos.",
  },
  {
    id: 3,
    src: "/tabelionato-figueiredo/recepcao10.jpg",
    title: "10º Andar - Tabelionato e Digital",
    desc: "Gabinete do Tabelião, realização de Testamentos e central de Atos Digitais. Atendimento exclusivo mediante agendamento.",
  },
  {
    id: 4,
    src: "/tabelionato-figueiredo/frente.jpg",
    title: "Sede Própria",
    desc: "Estrutura moderna e segura no coração do Recife, projetada para garantir conforto e eficiência em todos os atendimentos.",
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? PHOTOS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === PHOTOS.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-5xl mx-auto h-[500px] w-full m-auto relative group">
      {/* Container Principal da Imagem */}
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-2xl border border-slate-200 relative overflow-hidden transition-all"
        style={{
          backgroundImage: `url(${PHOTOS[currentIndex].src})`,
          backgroundColor: "#e2e8f0",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="flex flex-col items-center text-slate-400">
            <ImageIcon size={64} className="opacity-50 mb-2" />
            <span className="text-sm">Imagem não encontrada</span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100"></div>

        <div
          className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white animate-in fade-in slide-in-from-bottom-4 duration-500"
          key={currentIndex}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            {PHOTOS[currentIndex].title}
          </h3>
          <p className="text-slate-200 text-base md:text-lg max-w-3xl leading-relaxed font-medium">
            {PHOTOS[currentIndex].desc}
          </p>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/30 hover:bg-red-600 text-white cursor-pointer transition-all backdrop-blur-sm border border-white/20 z-10">
        <ChevronLeft onClick={prevSlide} size={24} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/30 hover:bg-red-600 text-white cursor-pointer transition-all backdrop-blur-sm border border-white/20 z-10">
        <ChevronRight onClick={nextSlide} size={24} />
      </div>

      <div className="flex top-6 justify-center py-2 gap-2 absolute w-full z-10">
        {PHOTOS.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer transition-all duration-300 h-1.5 rounded-full shadow-sm ${
              currentIndex === slideIndex
                ? "w-8 bg-red-500"
                : "w-2 bg-white/40 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}