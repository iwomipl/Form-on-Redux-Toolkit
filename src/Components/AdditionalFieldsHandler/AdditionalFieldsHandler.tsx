import React, {useEffect, useState} from "react";
import {SelectInput} from "../common/SelectInput/SelectInput";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {ForPizza} from "../ForPizza/ForPizza";
import {ForSoup} from "../ForSoup/ForSoup";
import {ForSandwich} from "../ForSandwich/ForSandwich";

export const AdditionalFieldsHandler = () => {
    const {type} = useSelector((store: RootState) => store.orderForm);
    const [addedField, setAddedField] = useState('');

    useEffect(() => {
        if (type === 'Pizza') {
            setAddedField('Pizza')
        } else if (type === 'Soup') {
            setAddedField('Soup')
        } else if (type === 'Sandwich') {
            setAddedField('Sandwich')
        } else if (type === '---') {
            setAddedField('---')
        }
    }, [type])

    return <>
        <SelectInput
            className="selectInput"
            text="Dish Type"
            name="type"
            value={type}
            potentialBr={true}
            required={true}
            options={['---', 'Pizza', 'Soup', 'Sandwich']}
        /><br/>
        {addedField === 'Pizza' && <ForPizza/>   }
        {addedField === 'Soup' && <ForSoup/>}
        {addedField === 'Sandwich' && <ForSandwich/>}
        {addedField === '---' && null}
    </>
}