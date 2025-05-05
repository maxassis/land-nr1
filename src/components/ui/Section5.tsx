"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardDepoiment from "@/components/ui/CardDepoiment";

const depoiments = [
  {
    text: "Com o Agente NR01, garantimos conformidade e priorizamos a saúde mental no nosso ambiente de trabalho.",
    stars: 5,
  },
  {
    text: "A automação do diagnóstico psicossocial reduziu riscos e otimizou processos no nosso SESMT.",
    stars: 5,
  },
  {
    text: "A precisão com que o sistema da Fiter identifica os riscos e já sugere as ações certas nos impressionou. Ele nos mostra as causas, os efeitos e o que fazer com base em dados reais. É como ter um consultor 24h por dia.",
    stars: 5,
  },
  {
    text: "O uso da plataforma foi extremamente simples e direto. Em poucos cliques, conseguimos montar os inventários dos cargos, gerar o PGR e acompanhar as ações. A experiência do usuário é excelente!",
    stars: 5,
  },
  {
    text: "A inteligência artificial da Fiter entregou um diagnóstico riquíssimo para a nossa empresa. Com ela, criamos planos de ação assertivos e realmente alinhados aos riscos identificados em cada área.",
    stars: 5,
  },
];

export default function Section5() {
  return (
    <div className="px-5 pb-16 lg:pb-32 bg-background">
      <div id="depoimentos" className="max-w-[90rem] w-full mx-auto pt-12">
        <h2 className="text-center text-2xl text-primary">USUÁRIOS</h2>
        <h3 className="text-center text-4xl font-bold">Depoimentos</h3>

        <div className="mt-18">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full sm:max-w-[90rem] mx-auto"
          >
            <CarouselContent className="-ml-1 ">
              {depoiments.map((depoiment, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 "
                >
                  <CardDepoiment
                    text={depoiment.text}
                    stars={depoiment.stars}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
