import { QuestionProps } from "@/types/QuestionProps";
import module from "./index.module.scss";

export function RadioButton({ text }: QuestionProps) {
  const handleClick = () => {};
  return (
    <div className={module.container} onClick={handleClick}>
      {text}
      <div className={module.container__check}></div>
    </div>
  );
}
