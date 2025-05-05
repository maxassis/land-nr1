"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 pb-5 bg-background">
      <header className="bg-primary-foreground relative rounded-2xl h-[5.31rem] pr-8 max-w-[90rem] w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1 h-full">
          <div className="w-[8.31rem] rounded-bl-2xl rounded-tl-2xl h-full flex items-center justify-center bg-primary">
            NR 01
          </div>

          {isOpen ? (
            <X
              className="hidden sm:block lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <Menu
              className="hidden sm:block lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        <ul className="items-center gap-8 hidden lg:flex">
          <li>
            <a
              href="#sobre"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#beneficios"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Benefícios
            </a>
          </li>
          <li>
            <a
              href="#processo"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Como Funciona
            </a>
          </li>
          <li>
            <a
              href="#depoimentos"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Depoimentos
            </a>
          </li>
          <li>
            <a
              href="#parceiros"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Parceiros
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-white cursor-pointer text-sm hover:text-blue-400 transition-colors duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>

        <button className="bg-primary rounded-xl py-3 text-white px-5 hidden sm:block cursor-pointer hover:bg-blue-700 transition-colors duration-300">
          Entrar em contato
        </button>

        {isOpen ? (
          <X
            className="block sm:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <Menu
            className="block sm:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}

        <div
          className={`
    absolute top-[85px] bg-[#131313D4] w-full
    overflow-hidden grid lg:hidden
    transition-all duration-500 ease-out
    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
  `}
        >
          <div className="overflow-hidden">
            <a
              href="#sobre"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#beneficios"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              Benefícios
            </a>
            <a
              href="#processo"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              Como Funciona
            </a>
            <a
              href="#depoimentos"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              Depoimentos
            </a>
            <a
              href="#parceiros"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              Parceiros
            </a>
            <a
              href="#faq"
              className="h-12 cursor-pointer flex justify-center items-center hover:bg-gray-800 transition-colors duration-300"
            >
              FAQ
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
