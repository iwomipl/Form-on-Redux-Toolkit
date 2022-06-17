import {createSlice} from "@reduxjs/toolkit";

interface FormState {
    name: string;
    time: string;
    dish: string;
    no_of_slices?: number;
    diameter?: number;
    spiciness_scale?: number;
    slices_of_bread?: number;
}

const initialState: FormState ={
    name: '',
    time: '00:00:00',
    dish: '',
}

interface SetName{
    payload: string;
}
interface SetTime{
    payload: string;
}
interface SetDish{
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
        setTime: (state, action: SetTime)=>{
            state.time = action.payload;
        },
        setDish: (state, action: SetDish)=>{
            state.dish = action.payload;
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


export const {setName, setTime, setDish, set_no_of_slices, set_diameter, set_spiciness_scale, set_slices_of_bread} = formSlice.actions;