"use client";
import { Card } from "@/components/Card/Index";
import module from "./page.module.scss";
import { RadioButton } from "@/components/Radio/Index";
import { useQuestions } from "@/hooks/useQuestions";
import { useAnswerStore } from "@/storage/answersStore";
import { useState } from "react";
import { Header } from "@/components/Header/Index";
import { ThemeProvider } from "next-themes";
import { Button } from "@/components/Button";
import { usePokemon } from "@/hooks/usePokemon";
export default function Home() {
  const [types, sprite] = useQuestions();
  const { correctAnswers } = useAnswerStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleClick = (selectedType: string) => {
    setSelectedAnswer(selectedType);
  };

  return (
    <>
      <ThemeProvider>
        <Header />
        <div className={module.container}>
          <Card sprite={sprite} />
          <div className={module.container__questions}>
            {types?.map((type: string, index: number) => (
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
