import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Section1 from "@/components/ui/Section1";
import Section2 from "@/components/ui/Section2";
import Section3 from "@/components/ui/Section3";
import Section4 from "@/components/ui/Section4";
import Section5 from "@/components/ui/Section5";
import Section6 from "@/components/ui/Section6";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />

    
    </div>
  );
}
