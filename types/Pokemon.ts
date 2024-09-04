export interface Pokemon {
  id: number;
  name: string;
  types?: { type: { name: string } }[];
  moves: { move: { name: string } };
  sprites: { other: { ["official-artwork"]: { front_default: string } } };
}
