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
        if (type === 'pizza') {
            setAddedField('pizza')
        } else if (type === 'soup') {
            setAddedField('soup')
        } else if (type === 'sandwich') {
            setAddedField('sandwich')
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
            options={['---', 'pizza', 'soup', 'sandwich']}
        /><br/>
        {addedField === 'pizza' && <ForPizza/>   }
        {addedField === 'soup' && <ForSoup/>}
        {addedField === 'sandwich' && <ForSandwich/>}
        {addedField === '---' && null}
    </>
}