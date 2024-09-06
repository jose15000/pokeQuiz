/* eslint-disable @next/next/no-img-element */
import { CardProps } from "@/types/CardProps";
import module from "./index.module.scss";

export function Card({ sprite }: CardProps) {
  return (
    <div className={module.content}>
      <img className={module.content__image} src={sprite} alt="" />
    </div>
  );
}
