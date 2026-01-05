import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import DigitalSteps from "@/components/home/DigitalSteps";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactLocation from "@/components/home/ContactLocation";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <DigitalSteps />
      <Testimonials />
      <Faq />
      <ContactLocation />
    </main>
  );
}