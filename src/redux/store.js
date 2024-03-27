import {configureStore} from "@reduxjs/toolkit";
import HeaderComponentReducer from "./Slices/HeaderComponent/HeaderComponentSlice";
import ServiceSlice from "./Slices/Service/ServiceSlice";

export const store = configureStore({
    reducer: {
        HeaderComponent: HeaderComponentReducer,
        ServicesPage: ServiceSlice,
    }
})
window.store = store