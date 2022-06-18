import React, {ChangeEvent} from "react";

interface Props {
    className: string;
    text: string;
    type: string;
    value: string | number;
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
            onChange={props.function}
            required={props.required}
        />
    </label>
)