import { create } from "zustand";

export const useAppStore = create((set) => ({
  prefersTheme: "light",
  setPrefersTheme: (value) => {
    set({
      prefersTheme: value,
    });
  },
  quiz: null,
  quizSlug: "",
  setQuizSlug: (value) => {
    set({
      quizSlug: value,
    });
  },
  quizId: "",
  setQuizId: (id) => {
    set({
      quizId: id,
    });
  },
  setQuiz: (quiz) => {
    set({ quiz });
  },
  score: null,
  setScore: (score) => {
    set({
      score,
    });
  },
  quizLogoBgColor: "",
  setQuizLogoBgColor: (value) => {
    set({
      quizLogoBgColor: value,
    });
  },
  questionsCount: null,
  setQuestionsCount: (count) => {
    set({
      questionsCount: count,
    });
  },
}));
