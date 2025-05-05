"use client";

import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";

const planos = [
  {
    name: "Basic",
    features: [
      "Painel Fiter",
      "Inventário de riscos psicossociais simples",
      "Exportação .xlsx"
    ]
  },
  {
    name: "Essential",
    features: [
      "Tudo do Basic +",
      "Análise semântica",
      "Prescrição automatizada",
      "Exportação PGR",
      "Comentários"
    ]
  },
  {
    name: "Pro",
    features: [
      "Tudo do Essential +",
      "Registro de ações no sistema",
      "Palestra digital anual",
      "Suporte técnico"
    ]
  }
];

const tabelaPrecos: Record<number | string, [string, string, string]> = {
  5: ["R$ 53,53", "R$ 60,22", "R$ 66,91"],
  10: ["R$ 65,02", "R$ 73,23", "R$ 81,44"],
  15: ["R$ 93,80", "R$ 105,78", "R$ 117,76"],
  20: ["R$ 122,55", "R$ 138,32", "R$ 154,10"],
  25: ["R$ 140,96", "R$ 159,16", "R$ 177,35"],
  30: ["R$ 145,09", "R$ 163,83", "R$ 182,56"],
  40: ["R$ 156,53", "R$ 176,55", "R$ 196,56"],
  50: ["R$ 187,14", "R$ 211,59", "R$ 236,03"],
  60: ["R$ 196,42", "R$ 222,47", "R$ 248,52"],
  70: ["R$ 227,88", "R$ 258,39", "R$ 288,90"],
  80: ["R$ 253,93", "R$ 288,69", "R$ 323,45"],
  90: ["R$ 276,13", "R$ 313,41", "R$ 350,69"],
  100: ["R$ 291,12", "R$ 330,81", "R$ 370,50"],
  150: ["R$ 353,78", "R$ 401,13", "R$ 448,47"],
  200: ["R$ 451,20", "R$ 511,09", "R$ 571,00"],
  250: ["R$ 541,79", "R$ 613,21", "R$ 684,63"],
  300: ["R$ 620,61", "R$ 702,91", "R$ 785,21"],
  350: ["R$ 692,06", "R$ 783,65", "R$ 875,25"],
  400: ["R$ 792,64", "R$ 897,29", "R$ 1.001,94"],
  450: ["R$ 891,83", "R$ 1.009,81", "R$ 1.127,80"],
  500: ["R$ 988,29", "R$ 1.118,76", "R$ 1.249,23"],
  1000: ["R$ 1.923,84", "R$ 2.165,71", "R$ 2.407,59"],
  "over": ["R$ 1,30/usuário", "R$ 1,55/usuário", "R$ 2,28/usuário"]
};

const calculatePlanos = (qty: number) => {
  if (qty > 1000) {
    const precos = tabelaPrecos["over"];
    return planos.map((plano, i) => ({
      ...plano,
      price: `${precos[i]}`
    }));
  }

  const keys = Object.keys(tabelaPrecos)
    .filter(k => k !== "over")
    .map(k => parseInt(k));
  const validKeys = keys.filter(k => qty >= k);
  const maxKey = validKeys.length > 0 ? Math.max(...validKeys) : 5;
  const precos = tabelaPrecos[maxKey];
  
  return planos.map((plano, i) => ({
    ...plano,
    price: precos[i]
  }));
};


export default function Hero() {
  const [colaborators, setColaborators] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setColaborators("");
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear" }}
      viewport={{ once: true }}
    >
      <div className="px-5 bg-background">
        <div className="h-auto lg:h-[44.8rem] max-w-[90rem] w-full mx-auto rounded-4xl overflow bg-primary grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-8 lg:p-16">
            <h1 className="text-4xl font-bold mb-6 md:text-5xl">
              Conformidade com a NR01: Inteligência Artificial e Saúde Mental Integradas
            </h1>

            <p className="text-[1.12rem]">
              Automatize o diagnóstico de riscos psicossociais com inovação e segurança.
            </p>

            <Sheet open={open} onOpenChange={handleOpenChange}>
              <SheetTrigger className="mt-10 px-5 py-5 bg-background hover:bg-gray-800 transition-colors duration-300 rounded-xl text-white flex gap-4 cursor-pointer">
                Quero conhecer
                <ArrowUpRight />
              </SheetTrigger>
              <SheetContent className="bg-white text-black border-gray-200 overflow-auto">
                <SheetHeader>
                  <SheetTitle className="text-black">Solicitação de orçamento</SheetTitle>
                  <SheetDescription>
                    Informe a quantidade de colaboradores da sua empresa para encontrar o plano ideal.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-4 px-4 mt-4">
                  <div className="flex gap-2 items-center justify-between">
                    <Label htmlFor="colaborators" className="text-right">
                      Colaboradores
                    </Label>
                    <Input
                      id="colaborators"
                      value={colaborators}
                      onChange={(e) => setColaborators(e.target.value)}
                      className="col-span-2 theme-dark border-gray-300"
                      type="number"
                      min="0"
                      step="1"
                    />
                  </div>

                  {colaborators && !isNaN(Number(colaborators)) && (
                    <>
                      {calculatePlanos(Number(colaborators)).map((plano) => (
                        <div
                          key={plano.name}
                          className="mt-4 p-4 border rounded-lg bg-gray-100 text-black"
                        >
                          <h3 className="text-lg font-semibold">{plano.name}</h3>
                          <p className="text-sm">Valor: {plano.price}</p>
                          <ul className="text-sm list-disc ml-5 mt-1">
                            {plano.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Button className="my-4 text-white cursor-pointer">
                        Comprar
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Image
            src="/images/hero.webp"
            alt="Banner bonito"
            width={500}
            height={500}
            quality={100}
            className="object-cover h-full w-full rounded-bl-4xl rounded-br-4xl rounded-tr-4xl hidden md:block"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  );
}
