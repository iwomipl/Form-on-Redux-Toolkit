import React, {ChangeEvent} from "react";

export interface Props {
    className: string;
    text: string;
    type: string;
    placeholder?: string;
    min?: number;
    max?: number;
    value?: string | number;
    potentialBr?: boolean;
    step?: string;
    required?: boolean;
    function:(e: ChangeEvent<HTMLInputElement>)=> void;
}

export const StandardInput = (props: Props)=>(
    <label className={props.className}>
        {props.text}:{props.potentialBr && <br/>}
        <input
            type={props.type}
            value={props.value}
            step={props.step || ""}
            min={props.min || ""}
            max={props.max || ""}
            placeholder={props.placeholder || ""}
            onChange={props.function}
            required={props.required}
        />
    </label>
)