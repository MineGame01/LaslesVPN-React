import {configureStore} from "@reduxjs/toolkit";
import HeaderSlice from "./Slices/Header/HeaderSlice";
import ServiceSlice from "./Slices/Service/ServiceSlice";

export const store = configureStore({
    reducer: {
        Header: HeaderSlice,
        Services: ServiceSlice,
    }
})
window.store = store