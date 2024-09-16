import {LabelProps} from '../_models/ILabel';

export default function Label(props: LabelProps) {
    return (
        <label
            className={props.className}
            htmlFor={props.htmlFor}
        >
            {props.label}
        </label>
    );
}