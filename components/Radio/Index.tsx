import { QuestionProps } from "@/types/QuestionProps";
import module from "./index.module.scss";

export function RadioButton({
  text,
  isRight,
  isSelected,
  onClick,
}: QuestionProps & {
  isRight: boolean;
  isSelected: boolean;
  onClick: (selectedQuestion: string) => void;
}) {
  return (
    <div
      className={`${module.container} ${
        isSelected && isRight ? module.container__correct : ""
      } ${isSelected && !isRight ? module.container__wrong : ""}`}
      onClick={() => onClick(text)}
    >
      {text}
      <div className={module.container__check}>
        <div className={isSelected ? module.container__check__inner : ""}></div>
      </div>
    </div>
  );
}
