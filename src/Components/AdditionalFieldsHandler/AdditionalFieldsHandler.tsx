import React, {useEffect, useState} from "react";
import {SelectInput} from "../common/SelectInput/SelectInput";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {ForPizza} from "../ForPizza/ForPizza";

export const AdditionalFieldsHandler = () => {
    const {dish} = useSelector((store: RootState) => store.orderForm);
    const [addedField, setAddedField] = useState('');

    useEffect(() => {
        if (dish === 'Pizza') {
            setAddedField('Pizza')
        } else if (dish === 'Soup') {
            setAddedField('Soup')
        } else if (dish === 'Sandwich') {
            setAddedField('Sandwich')
        } else if (dish === '---') {
            setAddedField('---')
        }
    }, [dish])

    return <>
        <SelectInput
            className="selectInput"
            text="Dish Type"
            name="dish"
            value={dish}
            potentialBr={true}
            required={true}
            options={['---', 'Pizza', 'Soup', 'Sandwich']}
        /><br/>
        {addedField === 'Pizza' && <ForPizza/>   }
        {addedField === 'Soup' && <h4>{addedField}</h4>}
        {addedField === 'Sandwich' && <h4>{addedField}</h4>}
        {addedField === '---' && null}
    </>
}