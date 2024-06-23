export interface InputProps{
    type: "text" | "password" | "email" | "number";
    variant?: "primary" | "secondary";
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: | string | number;
}