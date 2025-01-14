import { create } from "zustand";

const globalAppStore = create((set) => ({
  prefersTheme: "light",
  setPrefersTheme: (value) => {
    set({ prefersTheme: value });
  },
}));

export default globalAppStore;
