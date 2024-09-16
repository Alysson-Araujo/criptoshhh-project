export interface InputProps{
    type: "text" | "password" | "email" | "number";
    className?: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: | string | number;
}