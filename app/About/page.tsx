"use client";

import { Header } from "@/components/Header/Index";
import { ThemeProvider } from "next-themes";

export default function About() {
  return (
    <ThemeProvider>
      <Header />
      <div
        className="flex flex-col items-center text-center justify-center mx-36
      "
      >
        <div className="flex items-center mb-10">Sobre o Projeto</div>
        <p className="mb-10">
          O projeto foi desenvolvido com o objetivo de testar meus conhecimentos
          em React, com a premissa de que não poderia usar pesquisa para a sua
          realização.
        </p>
        <div className="flex flex-col text-center items-center mb-10">
          <div>Pontos positivos</div>
          <p className="m-10">
            Consegui implementar boa parte das funcionalidades só usando a
            cabeça e o que tenho aprendido nos últimos dois meses
          </p>
          <div className="m-10">Dificuldades</div>
          <p className="mb-10">
            Esse projeto foi muito desafiador para mim, justamente pelo fato de
            que só usei a minha cabeça. Percebi que me tornei dependente da
            pesquisa, e que demorei muito tempo enfrentando dificuldades.
            Algumas coisas não funcionam,outras eu nem consegui implementar, mas
            estou orgulhoso de que consegui entregar o melhor que pude fazer com
            o conhecimento que já tenho.
          </p>
          <h2 className="mb-10">Tecnologias utilizadas</h2>
          <img src="https://skillicons.dev/icons?i=ts,bun,react,next,sass,tailwind" />
        </div>
      </div>
    </ThemeProvider>
  );
}
