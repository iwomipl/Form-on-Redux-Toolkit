import React from "react";
import {ReturnedFromAPI} from "../../utils/fetchFunction";
import {FormState} from "../../features/form/form-slice";

export const ShowResponse = (props: FormState | ReturnedFromAPI) => {
    const returnedObj = {...props};

    return <>
        {({...props} as FormState).name ?
            <div><p>You have successfully ordered a meal.</p>
                <p>Here's what you ordered:</p>
            </div> :
            <div><p>Sorry, we could not order your meal.</p>
                <p>Here's what happened:</p>
            </div>}
        {Object.entries(returnedObj).map(elem => <p>{elem[0]}: <strong>{elem[1]}</strong></p>)}
    </>
}