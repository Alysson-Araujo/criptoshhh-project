import { InputProps } from "../_models/IInput";


export default function FormInput(props: InputProps) {
    return(
        <input 
            type={props.type}
            className={props.variant}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    )
}