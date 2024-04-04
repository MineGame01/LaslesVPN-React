import {createSlice} from "@reduxjs/toolkit";

const PlanSlice = createSlice({
    name: 'Plan',
    initialState: {
        plans: [
            {
                id: 1,
                namePlan: 'Free Plan',
                image: 'freePlan',
                services: [
                    {id: 1, name: 'Unlimited Bandwitch'},
                    {id: 2, name: 'Encrypted Connection'},
                    {id: 3, name: 'No Traffic Logs'},
                    {id: 4, name: 'Works on All Devices'},
                ],
                price: 'Free'
            },
            {
                id: 2,
                namePlan: 'Standard Plan',
                image: 'standartPlan',
                services: [
                    {id: 1, name: 'Unlimited Bandwitch'},
                    {id: 2, name: 'Encrypted Connection'},
                    {id: 3, name: 'Yes Traffic Logs'},
                    {id: 4, name: 'Works on All Devices'},
                    {id: 5, name: 'Connect Anyware'},
                ],
                price: '$9'
            },
            {
                id: 3,
                namePlan: 'Premium Plan',
                image: 'premiumPlan',
                services: [
                    {id: 1, name: 'Unlimited Bandwitch'},
                    {id: 2, name: 'Encrypted Connection'},
                    {id: 3, name: 'Yes Traffic Logs'},
                    {id: 4, name: 'Works on All Devices'},
                    {id: 5, name: 'Connect Anyware'},
                    {id: 6, name: 'Get New Features'},
                ],
                price: '$12'
            },
        ]
    },
    reducers: {}
})

export default PlanSlice.reducer