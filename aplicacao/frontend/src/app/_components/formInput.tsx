import { InputProps } from "../_models/IInput";


export default function FormInput(props: InputProps) {
    return(
        <input 
            type={props.type}
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            disabled={props.avaliable}
        />
    )
}