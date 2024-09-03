import module from "./index.module.scss";
import { usePokemon } from "@/hooks/usePokemon";
import { useRandom } from "@/hooks/useRandom";

export function Card() {
  const pokemon = usePokemon(useRandom(151));

  return (
    <div className={module.content}>
      <img src={pokemon?.sprites.front_default} alt="" />
    </div>
  );
}
