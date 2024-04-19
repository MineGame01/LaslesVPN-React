import {configureStore} from "@reduxjs/toolkit";
import HeaderSlice from "./Slices/Header/HeaderSlice";
import ServiceSlice from "./Slices/Service/ServiceSlice";
import PlanSlice from "./Slices/Plan/PlanSlice";
import GlobalNetworkSlice from "./Slices/GlobalNetwork/GlobalNetworkSlice";
import ReviewsSlice from "./Slices/Reviews/ReviewsSlice";

export const store = configureStore({
    reducer: {
        Header: HeaderSlice,
        Services: ServiceSlice,
        Plan: PlanSlice,
        GlobalNetwork: GlobalNetworkSlice,
        Reviews: ReviewsSlice
    }
})
window.store = store