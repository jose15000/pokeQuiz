import { pokeTypes } from "@/utils/Questions";
import { usePokemon } from "./usePokemon";
import { useRandom } from "./useRandom";
import { useEffect, useState } from "react";
import { useAnswerStore } from "@/storage/answersStore";

export const useQuestions = () => {
  const pokemon = usePokemon(useRandom(151));
  const [types, setTypes] = useState<string[]>([]);
  const [sprite, setSprite] = useState<String>();
  const { addCorrectAnswer, addWrongAnswer } = useAnswerStore();

  useEffect(() => {
    if (pokemon) {
      const correctAnswer = pokemon.types?.[0].type.name.toUpperCase();

      if (correctAnswer) {
        addCorrectAnswer(correctAnswer);
      }

      const sprite = pokemon.sprites.other["official-artwork"].front_default;
      if (correctAnswer && sprite) {
        const otherAnswers = pokeTypes.filter(
          (types) => types !== correctAnswer
        );

        otherAnswers.forEach((wrongAnswer) => addWrongAnswer(wrongAnswer));

        const sortQuestions = otherAnswers
          .sort(() => Math.random() * 0.5)
          .slice(0, 3);

        const options = [...sortQuestions, correctAnswer].sort(
          () => 0.5 - Math.random()
        );
        setTypes(options);
        setSprite(sprite);
      }
    }
  }, [pokemon, addCorrectAnswer]);

  return [types, sprite];
};
