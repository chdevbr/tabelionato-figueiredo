import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: '8º Ofício de Notas do Recife',
    template: '%s | 8º Ofício de Notas do Recife',
  },
  description: 'Site oficial do 8º Ofício de Notas do Recife.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-50 text-gray-800`}>
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}