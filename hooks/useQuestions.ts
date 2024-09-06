/* eslint-disable react-hooks/exhaustive-deps */
import { pokeTypes } from "@/utils/Questions";
import { usePokemon } from "./usePokemon";
import { useEffect, useState, useCallback } from "react";
import { useAnswerStore } from "@/storage/answersStore";

const getRandomPokemonId = (max: number) => Math.floor(Math.random() * max) + 1;

export const useQuestions = () => {
  const [pokemonId, setPokemonId] = useState<number>(getRandomPokemonId(151));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const pokemon = usePokemon(pokemonId);
  const [types, setTypes] = useState<string[]>([]);
  const [sprite, setSprite] = useState<string>("");
  const { wrongAnswers, addCorrectAnswer, addWrongAnswer, score, setScore } =
    useAnswerStore();

  const fetchNewPokemon = useCallback(() => {
    if (score < 3) {
      setPokemonId(getRandomPokemonId(151));
    }
    if (score === 3) {
      setGameOver(true);
    }
  }, [score]);

  useEffect(() => {
    if (pokemon && !gameOver) {
      const correctAnswer = pokemon.types?.[0].type.name.toUpperCase();
      const sprite = pokemon.sprites.other["official-artwork"].front_default;

      if (correctAnswer && sprite) {
        addCorrectAnswer(correctAnswer);
        const otherAnswers = pokeTypes.filter((type) => type !== correctAnswer);
        if (otherAnswers) setScore();
        const sortQuestions = otherAnswers
          .sort(() => Math.random() * 0.5)
          .slice(0, 3);

        const options = [...sortQuestions, correctAnswer].sort(
          () => 0.5 - Math.random()
        );
        setTypes(options);
        setSprite(sprite);
        wrongAnswers.forEach(() => wrongAnswers.pop());
      }
    }
  }, [pokemon, addCorrectAnswer, addWrongAnswer, gameOver]);

  return { types, sprite, fetchNewPokemon, gameOver, score };
};
