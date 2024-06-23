export interface TextareaProps {
  placeholder: string;
  variant: "primary" | "secondary";
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}
