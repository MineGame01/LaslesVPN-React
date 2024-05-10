import {createSlice} from "@reduxjs/toolkit";

const FooterSlice = createSlice({
    name: "Footer",
    initialState: {
        text: "is a private virtual network that has unique features and has high security.",
        navigate: [
            {
                title: "Product",
                elements: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"]
            },
            {
                title: "Engage",
                elements: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"]
            },
            {
                title: "Earn Money",
                elements: ["Affiliate", "Become Partner"]
            }
        ]
    }
});

export default FooterSlice.reducer;