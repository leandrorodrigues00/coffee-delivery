import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...props }: ButtonProps) {
  return <ButtonContainer>{text}</ButtonContainer>;
}
