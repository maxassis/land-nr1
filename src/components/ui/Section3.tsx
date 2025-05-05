"use client";
import CardSection from "./CardSection";

export default function Section3() {
  const content = [
    {
      title: "Conformidade imediata com a NR01 (2025)",
      text: "Redução de riscos jurídicos e trabalhistas",
      imageSrc: "/images/beneficio1.webp",
      imageFirst: true,
    },
    {
      title: "Diagnóstico automatizado e sem vieses",
      text: "Visão estratégica da saúde mental organizacional",
      imageSrc: "/images/beneficio2.webp",
      imageFirst: false,
    },
    {
      title: "Economia de tempo e recursos do RH e do SESMT",
      text: "Atualizações automáticas conforme normas futuras",
      imageSrc: "/images/beneficio3.webp",
      imageFirst: true,
    },
  ];

  return (
    <div className="px-5 bg-white pt-5">
      <div id="beneficios" className="h-auto max-w-[90rem] w-full mx-auto bg-background rounded-tl-4xl rounded-tr-4xl p-4 lg:pt-16 lg:px-16 lg:pb-12">
        <h3 className="text-primary text-2xl text-center lg:text-left">PORQUE USAR</h3>
        <h3 className="text-4xl font-bold mb-6 lg:mb-14 text-center lg:text-left">
          Benefícios
        </h3>

        {content.map((item, index) => (
          <CardSection
            key={index}
            title={item.title}
            text={item.text}
            imageSrc={item.imageSrc}
            imageFirst={item.imageFirst}
          />
        ))}
      </div>
    </div>
  );
}
