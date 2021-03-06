import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setName, set_preparation_time, FormState} from "../../features/form/form-slice";
import {StandardInput} from "../common/StandardInput/StandardInput";
import {AdditionalFieldsHandler} from "../AdditionalFieldsHandler/AdditionalFieldsHandler";
import {fetchFunction, ReturnedFromAPI} from "../../utils/fetchFunction";
import {ShowResponse} from "../ShowResponse/ShowResponse";

export const OrderForm = () => {
    const dispatch = useDispatch();
    const {
        name,
        preparation_time,
        type,
        no_of_slices,
        diameter,
        spiciness_scale,
        slices_of_bread
    } = useSelector((store: RootState) => store.orderForm);
    const [returnedObj, setReturnedObj] = useState({} as ReturnedFromAPI | FormState);
    const [showForm, setShowForm] = useState(true);

    useEffect(() => setShowForm(true), [])

        //Function to update state onChange of form
    const updateData = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) => {
        if (name === 'name') {
            dispatch(setName(e.target.value));
        } else if (name === 'preparation_time') {
            dispatch(set_preparation_time(e.target.value));
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (type !== '---') {
            if (preparation_time === '00:00:00') {
                alert('No dish is ready in 00:00:00. Change time of preparation to send Order.');
            } else {
                try {
                    //Pizza
                    type === 'pizza' && setReturnedObj(await fetchFunction({
                        name, preparation_time, type, no_of_slices, diameter
                    }));
                    //Soup
                    type === 'soup' && setReturnedObj(await fetchFunction({
                        name, preparation_time, type, spiciness_scale
                    }));
                    //Sandwich
                    type === 'sandwich' && setReturnedObj(await fetchFunction({
                        name, preparation_time, type, slices_of_bread
                    }));

                } catch (err) {
                    setReturnedObj(err as ReturnedFromAPI);
                    console.log(err)
                }
                setShowForm(false);
            }
        } else {
            alert('You should choose Dish type.')
        }

    }
    return (<>
        {showForm ?
            <form onSubmit={handleSubmit}>
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
            </form> :
            <ShowResponse {...returnedObj}/>}
    </>)
}
