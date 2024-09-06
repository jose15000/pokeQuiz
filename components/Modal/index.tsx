import { ModalProps } from "@/types/ModalProps";
import React from "react";
import module from "./index.module.scss";
export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={module.content}>
      <div className={module.content__inner}></div>
      <div className="bg-darkMode rounded-lg shadow-lg p-8 z-10">
        <button className="absolute top-2 right-2" onClick={onClose}>
          Fechar
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
