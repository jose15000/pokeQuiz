import { ToggleTheme } from "../ToggleTheme";
import module from "./index.module.scss";
import { useThemeStore } from "@/storage/themeStore";

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const handleThemeChange = () => {};
  return (
    <>
      <div className={module.container}>
        <a href="/">Home</a>
        <a href="/About/">About</a>
        <ToggleTheme />
      </div>
    </>
  );
}
