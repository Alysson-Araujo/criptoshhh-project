export interface FormProps {
    onSubmit?: (e: any) => void;
    onChange?: (e: any) => void;
    value: string;
    placeholdershift: string;
    label?: string;
    buttonText?: string;
    error?: string;
    disabled?: boolean;
}