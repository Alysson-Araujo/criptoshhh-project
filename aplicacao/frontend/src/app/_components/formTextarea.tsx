import { TextareaProps } from "../_models/ITextArea";

export default function FormTextarea(props: TextareaProps) {
  return (
    <textarea
      className={props.variant}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
}
