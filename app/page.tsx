"use client";

import module from "./page.module.scss";
import { RadioButton } from "@/components/Radio/Index";
import { useQuestions } from "@/hooks/useQuestions";
export default function Home() {
  const types = useQuestions();
  return (
    <>
      <div className={module.container}>
        <div className={module.container__questions}>
          {types.map((type, index) => (
            <RadioButton
              text={type}
              isRight={type === types.find((t) => t === type)}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
