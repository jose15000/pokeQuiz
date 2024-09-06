import { ToggleThemeProps } from "@/types/ToggleTheme";
import { create } from "zustand";

export const useThemeStore = create<ToggleThemeProps>((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
