"use client";
import * as motion from "motion/react-client";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Section6() {
  return (
    <div className="px-5 bg-white pt-5 pb-24">
      <div id="parceiros" className="max-w-[90rem] w-full mx-auto">
        <div className="lg:h-[16rem] bg-background rounded-4xl px-8 md:px-16 py-12 mb-10">
          <div className="flex flex-col justify-between items-left ">
            <div>
              <h4 className="text-primary text-2xl">QUEM USA</h4>
              <h3 className="text-4xl mb-5">Empresas que confiam</h3>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 mt-3 w-auto lg:w-[500px]">
              <Image
                src="/empresa1.png"
                alt="empresa1"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />

              <Image
                src="/empresa2.png"
                alt="empresa1"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />

              <Image
                src="/empresa3.png"
                alt="empresa1"
                width={100}
                height={100}
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 id="faq" className="text-primary">
            FAQ
          </h4>
          <h2 className="text-4xl text-black mb-3 font-bold">
            As perguntas mais frequentes
          </h2>

          <p className="text-black max-w-[53.13rem] mb-10">
            Aqui você pode encontrar as perguntas mais frequentes sobre o Agente
            NR01 Psicossocial e dúvidas relacionadas. Não consegue encontrar o
            que está procurando? Entre em contato com nossa equipe e retire suas
            dúvidas
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary text-xl font-bold">
                O que é o Agente NR01 da Fiter?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                O Agente NR01 é uma inteligência artificial desenvolvida pela
                Fiter para ajudar sua empresa a cumprir as exigências da Norma
                Regulamentadora nº 1 (NR-1), com foco em riscos psicossociais.
                Ele realiza automaticamente o inventário de riscos por cargo,
                analisa lesões e agravos à saúde mental, gera relatórios com
                recomendações e preenche a planilha oficial do PGR psicossocial.
                Tudo isso com base em neurociência, psicometria e ciência de
                dados, sem interferência de vieses humanos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary text-xl font-bold">
                Como funciona o Agente NR01?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                Em apenas alguns cliques, o software analisa as funções de cada
                cargo, identifica riscos psicossociais com base em evidências e
                gera uma matriz de risco automatizada com diagnóstico técnico.
                Ele prescreve ações preventivas personalizadas fundamentadas em
                CIDs e evidências científicas, exporta a planilha oficial da
                NR-01 e relatórios em PDF, além de permitir o registro e
                acompanhamento das ações diretamente no painel. No plano
                Enterprise, também realiza medições anuais de clima, saúde
                mental, felicidade e FIT cultural, com devolutivas automatizadas
                para cada colaborador.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary text-xl font-bold">
                Quais são os benefícios de usar o Agente NR01?
              </AccordionTrigger>
              <AccordionContent className="text-black text-base">
                A solução oferece conformidade técnica com a nova exigência da
                NR-1 no que diz respeito à gestão de riscos psicossociais,
                eliminando a necessidade de diagnósticos manuais e reduzindo
                significativamente tempo e custos operacionais. Com base em
                ciência de dados e evidências, o sistema fornece diagnósticos
                objetivos e livres de vieses humanos, além de gerar análises
                aprofundadas que revelam causas, efeitos e caminhos de ação
                claros. Os relatórios são automaticamente preparados para
                atender a auditorias, enquanto, no plano Enterprise com o módulo
                Pulse integrado, a ferramenta contribui diretamente para a
                melhoria do bem-estar, do clima organizacional e da saúde mental
                da equipe.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
