import {createSlice} from "@reduxjs/toolkit";

export interface FormState {
    name: string;
    preparation_time: string;
    type: string;
    no_of_slices?: number;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
}

const initialState: FormState ={
    name: '',
    preparation_time: '00:00:00',
    type: '---',
    no_of_slices: 1,
    diameter: 20,
    spiciness_scale: 5,
    slices_of_bread: 1,
}

interface SetName{
    payload: string;
}
interface Set_preparation_time{
    payload: string;
}
interface SetType{
    payload: string;
}
interface Set_no_of_slices{
    payload: number;
}
interface Set_diameter{
    payload: number;
}
interface Set_spiciness_scale{
    payload: number;
}
interface Set_slices_of_bread{
    payload: number;
}

export const formSlice = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        setName: (state, action: SetName)=>{
            state.name = action.payload;
        },
        set_preparation_time: (state, action: Set_preparation_time)=>{
            state.preparation_time = action.payload;
        },
        setType: (state, action: SetType)=>{
            state.type = action.payload;
        },
        set_no_of_slices: (state, action: Set_no_of_slices)=>{
            state.no_of_slices = action.payload;
        },
        set_diameter: (state, action: Set_diameter)=>{
            state.diameter = action.payload;
        },
        set_spiciness_scale: (state, action: Set_spiciness_scale)=>{
            state.spiciness_scale = action.payload;
        },
        set_slices_of_bread: (state, action: Set_slices_of_bread)=>{
            state.slices_of_bread = action.payload;
        },
    }
})


export const {setName, set_preparation_time, setType, set_no_of_slices, set_diameter, set_spiciness_scale, set_slices_of_bread} = formSlice.actions;