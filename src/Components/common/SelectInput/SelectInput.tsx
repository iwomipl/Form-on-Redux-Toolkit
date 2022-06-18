import React, {ChangeEvent} from "react";
import {setDish} from "../../../features/form/form-slice";
import {useDispatch} from "react-redux";

interface Props {
    className: string;
    text: string;
    name: string;
    value: string;
    potentialBr?: boolean;
    required?: boolean;
    options: string[];
}

export const SelectInput = (props: Props)=> {
    const dispatch = useDispatch();
    // const { dish } = useSelector((store: RootState )=> store.orderForm );
    // @TODO might be usefull later, if not delete
    const arrOfOptions = props.options;

    const updateData = (e: ChangeEvent<HTMLSelectElement>, name: string)=>{
        if (name === 'dish') {
            dispatch(setDish(e.target.value));
        }
    }

    return <label className={props.className}>
        {props.text}:{props.potentialBr && <br/>}
        <select
            value={props.value}
            required={props.required}
            onChange={(e)=> updateData(e, `${props.name}`)}
        >
        {arrOfOptions.map(option=> <option value={option}>{option}</option>)}
        </select>
    </label>
}