"use client";

import CardItem from "./CartItem";

type CardData = {
  number: string;
  title: string;
  text: string;
  fromLeft: boolean;
};

export default function Section2() {
  const cardData: CardData[] = [
    {
      number: "1",
      title: "Diagnóstico de Riscos Psicossociais",
      text: "Diagnóstico automático dos riscos psicossociais dos cargos.",
      fromLeft: true,
    },
    {
      number: "2",
      title: "Análise Semântica Neuropsicodinâmica",
      text: "Análise semântica inteligente, baseada na neuropsicodinâmica do trabalho.",
      fromLeft: false,
    },
    {
      number: "3",
      title: "Classificação Científica de Riscos",
      text: "Classificação dos riscos conforme CID, fatores psicossociais e evidências científicas.",
      fromLeft: true,
    },
    {
      number: "4",
      title: "Ações Corretivas Baseadas na OMS",
      text: "Prescrição de ações corretivas com base nas melhores práticas da OMS.",
      fromLeft: false,
    },
    {
      number: "5",
      title: "Geração de Documentos para Inspeção",
      text: "Geração automática de laudos e planilhas exigidos pela inspeção do trabalho.",
      fromLeft: true,
    },
    {
      number: "6",
      title: "Conformidade Legal Atualizada",
      text: "Atualizações contínuas para garantir conformidade permanente com a legislação.",
      fromLeft: false,
    }
  ];

  return (
    <div className="px-5 pb-16 lg:pb-30">
      <div id="processo" className="mt-[2rem] lg:mt-[4rem] h-auto max-w-[90rem] w-full mx-auto">
        <h1 className="text-2xl text-primary text-center lg:text-left">FUNCIONAMENTO</h1>
        <h3 className="text-white text-4xl text-center lg:text-left">Como Funciona</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {cardData.map((item) => (
            <CardItem
              key={item.number}
              number={item.number}
              title={item.title}
              text={item.text}
              fromLeft={item.fromLeft}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
