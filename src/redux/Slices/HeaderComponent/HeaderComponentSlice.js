import {createSlice} from "@reduxjs/toolkit";

const HeaderComponentSlice = createSlice({
    name: 'HeaderComponent',
    initialState: {
        ListData: [
            {id: 1, to: '/', name: 'About'},
            {id: 2, to: '/', name: 'Features'},
            {id: 3, to: '/', name: 'Pricing'},
            {id: 4, to: '/', name: 'Testimonials'},
            {id: 5, to: '/', name: 'Help'},
        ]
    },
    reducers: {

    },
})

export const { addList } = HeaderComponentSlice.actions
export default HeaderComponentSlice.reducer