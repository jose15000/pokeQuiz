"use client";

import { Card } from "@/components/Card/Index";
import module from "./page.module.scss";
import { RadioButton } from "@/components/Radio/Index";
import { useQuestions } from "@/hooks/useQuestions";
import { useAnswerStore } from "@/storage/answersStore";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Index";
import { ThemeProvider } from "next-themes";
import { Modal } from "@/components/Modal";

export default function Home() {
  const { types, sprite, fetchNewPokemon, gameOver, score } = useQuestions();
  const { correctAnswers } = useAnswerStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (gameOver) {
      setIsModalOpen(true);
    }
  }, [gameOver]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (selectedType: string) => {
    setSelectedAnswer(selectedType);
    fetchNewPokemon();
  };
  return (
    <>
      <ThemeProvider>
        <Header />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>Jogo encerrado!</h2>
          <p>Pontuação: {score}</p>
          <button onClick={handleCloseModal}>Fechar</button>
        </Modal>
        <div className={module.container}>
          <Card sprite={sprite} />
          <div className={module.container__questions}>
            {types.map((type: string, index: number) => (
              <RadioButton
                text={type}
                isSelected={selectedAnswer === type}
                isRight={
                  correctAnswers.includes(type) && selectedAnswer === type
                }
                onClick={handleClick}
                key={index}
              />
            ))}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
