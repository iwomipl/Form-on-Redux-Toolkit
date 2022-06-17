import {configureStore} from "@reduxjs/toolkit";
import { formSlice } from "../features/form/form-slice";

export const store = configureStore({
    reducer: {
        orderForm: formSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>