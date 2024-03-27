import {configureStore} from "@reduxjs/toolkit";
import HeaderComponentReducer from "./Slices/HeaderComponent/HeaderComponentSlice";

export const store = configureStore({
    reducer: {
        HeaderComponent: HeaderComponentReducer
    }
})
window.store = store