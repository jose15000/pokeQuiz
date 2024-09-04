import { ToggleTheme } from "../ToggleTheme";
import module from "./index.module.scss";

export function Header() {
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
