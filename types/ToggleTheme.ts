export interface ToggleThemeProps {
  theme: "dark" | "light";
  onClick?: () => void;
  toggleTheme: () => void;
}
