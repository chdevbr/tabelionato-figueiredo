import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative w-full pt-36 pb-20 md:pt-48 md:pb-24 bg-slate-900 overflow-hidden border-b-4 border-red-800">

      {/* 1. FUNDO IGUAL AO HERO */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/70"></div>
      </div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-red-600"></span>
            <p className="text-red-400 font-bold tracking-widest text-xs uppercase">
              {subtitle}
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            {title}
            <span className="text-red-600">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}