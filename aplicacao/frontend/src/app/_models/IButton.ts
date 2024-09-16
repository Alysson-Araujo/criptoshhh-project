import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}
