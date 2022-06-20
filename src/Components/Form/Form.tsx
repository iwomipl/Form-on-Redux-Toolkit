import React, {ChangeEvent, FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setName, set_preparation_time} from "../../features/form/form-slice";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {AdditionalFieldsHandler} from "../AdditionalFieldsHandler/AdditionalFieldsHandler";
import {fetchFunction} from "../../utils/fetchFunction";

export const OrderForm = ()=>{
    const dispatch = useDispatch();
    const {name, preparation_time, type, no_of_slices, diameter, spiciness_scale, slices_of_bread} = useSelector((store: RootState )=> store.orderForm );

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string)=>{
        if (name === 'name') {
            dispatch(setName(e.target.value));
        } else if (name === 'preparation_time') {
            dispatch(set_preparation_time(e.target.value));
        }
    }

    const handleSubmit = async (e: FormEvent)=>{
        e.preventDefault();
        try {
            if (type === 'pizza'){
                await fetchFunction({
                    name, preparation_time, type, no_of_slices, diameter
                })
            }
            if (type === 'soup'){
                await fetchFunction({
                    name, preparation_time, type, spiciness_scale
                })
            }
            if (type === 'sandwich'){
                await fetchFunction({
                    name, preparation_time, type, slices_of_bread
                })
            }
        } catch (err){
            console.log(err)
        }

    }
    return (<form onSubmit={handleSubmit}>
        <StandardInput
            className="standardInput"
            text="Dish name"
            name="name"
            type="text"
            value={name}
            required={true}
            potentialBr={true}
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'name')}
        /><br/>
        <StandardInput
            className="standardInput"
            text="Preparation time"
            name="preparation_time "
            type="time"
            value={preparation_time}
            step="1"
            potentialBr={true}
            required={true}
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'preparation_time')}
        /><br/>
        <AdditionalFieldsHandler/><br/>
        <button>Order now!</button>
    </form>)
}
