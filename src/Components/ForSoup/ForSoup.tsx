import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../store";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {set_spiciness_scale} from "../../features/form/form-slice";

export const ForSoup = () => {
    const dispatch = useDispatch();
    const {spiciness_scale} = useSelector((store: RootState) => store.orderForm);

    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => {
        if (name === 'spiciness_scale') {
            dispatch(set_spiciness_scale(Number(e.target.value)));
        }
    }

    return <>
        <StandardInput
            className="standardInput"
            text="How Spicy (1-10)"
            name="spiciness_scale"
            type="number"
            value={spiciness_scale}
            required={true}
            potentialBr={true}
            min={1}
            max={10}
            step="1"
            placeholder="Min 1 slice"
            function={(e: ChangeEvent<HTMLInputElement>) => updateData(e, 'spiciness_scale')}
        /><br/>
    </>
}