import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../store";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {set_diameter, set_no_of_slices} from "../../features/form/form-slice";

export const ForPizza = ()=>{
    const dispatch = useDispatch();
    const {no_of_slices, diameter} = useSelector((store: RootState) => store.orderForm);

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string)=>{
        if (name === 'no_of_slices') {
            dispatch(set_no_of_slices(Number(e.target.value)));
        } else if (name === 'diameter') {
            dispatch(set_diameter(Number(e.target.value)));
        }
    }

    return <>
        <StandardInput
            className="standardInput"
            text="no_of_slices"
            type="number"
            value={no_of_slices || 1}
            required={true}
            potentialBr={true}
            min={1}
            placeholder="Min 1 slice"
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'no_of_slices')}
        /><br/>
        <StandardInput
            className="standardInput"
            text="diameter"
            type="number"
            value={diameter}
            required={true}
            potentialBr={true}
            step="any"
            min={0}
            placeholder="Float number."
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'diameter')}
        /><br/>
        <h1>{no_of_slices}</h1>
        <h1>{diameter}</h1>
    </>
}