import { ButtonProps } from "@/types/ButtonProps";
import module from "./index.module.scss";

export function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <div className={module.container} onClick={onClick}>
        {children}
      </div>
    </>
  );
}
