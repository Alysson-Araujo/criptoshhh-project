import { ButtonProps } from "../_models/IButton";

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={props.className}
    >
      {props.label}
    </button>
  );
}
