import {createSlice} from "@reduxjs/toolkit";

const SubscribeNowSlice = createSlice({
    name: 'SubscribeNow',
    initialState: {
        title: 'Subscribe Now for Get Special Features!',
        text: 'Let\'s subscribe with us and find the fun.'
    },
    reducers: {}
})

export default SubscribeNowSlice.reducer;