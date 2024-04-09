import {configureStore} from "@reduxjs/toolkit";
import HeaderSlice from "./Slices/Header/HeaderSlice";
import ServiceSlice from "./Slices/Service/ServiceSlice";
import PlanSlice from "./Slices/Plan/PlanSlice";

export const store = configureStore({
    reducer: {
        Header: HeaderSlice,
        Services: ServiceSlice,
        Plan: PlanSlice,
    }
})
window.store = store