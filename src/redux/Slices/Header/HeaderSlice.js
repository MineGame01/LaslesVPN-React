import {createSlice} from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name: 'Header',
    initialState: {
        ListData: [
            {id: 1, to: '/', name: 'About'},
            {id: 2, to: '/', name: 'Features'},
            {id: 3, to: '/', name: 'Pricing'},
            {id: 4, to: '/', name: 'Testimonials'},
            {id: 5, to: '/', name: 'Help'},
        ]
    },
    reducers: {},
})
export default HeaderSlice.reducer