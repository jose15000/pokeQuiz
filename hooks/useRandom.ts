import { useState } from "react";

export const useRandom = (imputNumber: number) => {
  const [randomNumber] = useState<number>(
    () => Math.floor(Math.random() * imputNumber) + 1
  );

  return randomNumber;
};
