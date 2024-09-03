import { pokeTypes } from "@/utils/Questions";
import { usePokemon } from "./usePokemon";
import { useRandom } from "./useRandom";
import { useEffect, useState } from "react";

export const useQuestions = () => {
  const pokemon = usePokemon(useRandom(151));
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    if (pokemon) {
      const correctAnswer = pokemon?.types[0].type.name;
      if (correctAnswer) {
        const otherAnswers = pokeTypes.filter(
          (types) => types !== correctAnswer
        );

        const sortQuestions = otherAnswers
          .sort(() => Math.random() * 0.5)
          .slice(0, 3);

        const options = [...sortQuestions, correctAnswer].sort(
          () => 0.5 - Math.random()
        );
        setTypes(options);
      }
    }
  }, [pokemon]);

  return types;
};
