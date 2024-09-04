import { create } from "zustand";

interface AnwerState {
  correctAnswers: string[];
  wrongAnswers: string[];
  addCorrectAnswer: (answer: string) => void;
  addWrongAnswer: (answer: string) => void;
}

export const useAnswerStore = create<AnwerState>((set) => ({
  correctAnswers: [],
  wrongAnswers: [],
  addCorrectAnswer: (answer) =>
    set((state) => ({
      correctAnswers: [...state.correctAnswers, answer],
    })),
  addWrongAnswer: (answer) =>
    set((state) => ({
      wrongAnswers: [...state.wrongAnswers, answer],
    })),
}));
