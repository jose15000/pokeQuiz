import { Pokemon } from "@/types/Pokemon";
import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}
`);
      setPokemon(response.data);
    };

    request();
  }, [id]);

  return pokemon;
};
