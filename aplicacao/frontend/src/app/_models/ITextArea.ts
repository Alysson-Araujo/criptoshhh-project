export interface TextareaProps {
  placeholder: string;
  className?: string; 
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}
