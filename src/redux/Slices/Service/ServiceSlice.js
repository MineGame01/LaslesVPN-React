import {createSlice} from "@reduxjs/toolkit";

const ServiceSlice = createSlice({
    name: 'ServicePage',
    initialState: {
        services: [
            {id: 1, name: 'Powerfull online protection.'},
            {id: 2, name: 'Internet without borders.'},
            {id: 3, name: 'Supercharged VPN'},
            {id: 4, name: 'No specific time limits.'},
        ],
        title: 'We Provide Many Features You Can Use',
        text: 'You can explore the features that we provide with fun and have their own functions each feature.'
    },
    reducers: {}
})

export default ServiceSlice.reducer