import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../store";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {set_slices_of_bread} from "../../features/form/form-slice";

export const ForSandwich = () => {
    const dispatch = useDispatch();
    const {slices_of_bread} = useSelector((store: RootState) => store.orderForm);

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => {
        if (name === 'slices_of_bread') {
            dispatch(set_slices_of_bread(Number(e.target.value)));
        }
    }

    return <>
        <StandardInput
            className="standardInput"
            text="slices_of_bread"
            type="number"
            value={slices_of_bread || 1}
            required={true}
            potentialBr={true}
            min={1}
            step="1"
            placeholder="Min 1 slice"
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'slices_of_bread')}
        /><br/>
    </>
}