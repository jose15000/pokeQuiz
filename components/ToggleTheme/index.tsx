import { useThemeStore } from "@/storage/themeStore";
import { Moon, Sun } from "react-bootstrap-icons";

export function ToggleTheme() {
  const { theme, toggleTheme } = useThemeStore();

  const handleClick = () => {
    if (theme === "light") {
      toggleTheme();
    } else {
      theme === "dark";
      toggleTheme();
    }
  };
  return (
    <>
      <div onClick={handleClick}>{theme === "light" ? <Sun /> : <Moon />}</div>
    </>
  );
}
