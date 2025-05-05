"use client";
import * as motion from "motion/react-client";
import CardInfo from "./CardInfo";

export default function Section4() {
  return (
    <div className="px-5 bg-background overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0.8, opacity: 1 }}
        transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          id="solucao"
          className="h-auto max-w-[90rem] w-full mx-auto bg-white pb-12 px-8 md:px-16 pt-12 rounded-bl-4xl rounded-br-4xl p-8 md:py-16 md:pl-22 md:pr-80"
        >
          <h3 className="text-primary text-xl">
            GESTÃO PSICOSSOCIAL
          </h3>
          <h3 className="text-4xl text-black mb-3 font-bold">A Importância da Gestão Psicossocial</h3>
          <p className="text-black text-lg md:text-xl">
            Conforme dados da OMS, mais de 60% das doenças ocupacionais têm
            origem psicossocial. A nova NR01 torna obrigatório o mapeamento
            desses riscos. Estar em conformidade protege vidas, fortalece a
            cultura de saúde mental e evita passivos trabalhistas que podem
            impactar financeiramente a empresa.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
