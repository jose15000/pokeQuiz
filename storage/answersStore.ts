import { create } from "zustand";

interface AnwerState {
  score: number;
  correctAnswers: string[];
  wrongAnswers: string[];
  addCorrectAnswer: (answer: string) => void;
  addWrongAnswer: (answer: string) => void;
  setScore: () => void;
}

export const useAnswerStore = create<AnwerState>((set) => ({
  correctAnswers: [],
  wrongAnswers: [],
  score: 0,
  addCorrectAnswer: (answer) =>
    set((state) => ({
      correctAnswers: [...state.correctAnswers, answer],
    })),
  addWrongAnswer: (answer) =>
    set((state) => ({
      wrongAnswers: [...state.wrongAnswers, answer],
    })),
  setScore: () => set((state) => ({ score: state.score + 1 })),
}));
