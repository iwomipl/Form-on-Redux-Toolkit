import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setName, setTime} from "../../features/form/form-slice";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {AdditionalFieldsHandler} from "../AdditionalFieldsHandler/AdditionalFieldsHandler";

export const OrderForm = ()=>{
    const dispatch = useDispatch();
    const {name, time } = useSelector((store: RootState )=> store.orderForm );

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string)=>{
        if (name === 'name') {
            dispatch(setName(e.target.value));
        } else if (name === 'time') {
            dispatch(setTime(e.target.value));
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

        <AdditionalFieldsHandler/><br/>
        <button>Order now!</button>
    </form>)
}
