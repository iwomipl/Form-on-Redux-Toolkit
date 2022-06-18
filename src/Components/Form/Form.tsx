import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setDish, setName, setTime} from "../../features/form/form-slice";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {SelectInput} from "../common/SelectInput/SelectInput";

export const OrderForm = ()=>{
    const dispatch = useDispatch();
    const {name, time, dish } = useSelector((store: RootState )=> store.orderForm );

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string)=>{
        if (name === 'name') {
            dispatch(setName(e.target.value));
        } else if (name === 'time') {
            dispatch(setTime(e.target.value));
        }else if (name === 'dish') {
            dispatch(setDish(e.target.value));
        }
    }
    return (<form>
        <StandardInput
            className="standardInput"
            text="Dish name"
            type="text"
            value={name}
            required={true}
            potentialBr={true}
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'name')}
        /><br/>
        <StandardInput
            className="standardInput"
            text="Preparation time"
            type="time"
            value={time}
            step="1"
            potentialBr={true}
            required={true}
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'time')}
        /><br/>

        <SelectInput
            className="selectInput"
            text="Dish Type"
            name="dish"
            value={dish}
            potentialBr={true}
            required={true}
            options={['Pizza', 'Soup', 'Sandwich']}
        /><br/>
        <h1>{dish}</h1>
        <button>Order now!</button>
    </form>)
}
