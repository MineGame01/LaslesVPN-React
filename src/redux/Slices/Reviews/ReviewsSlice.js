import {createSlice} from "@reduxjs/toolkit";
import ViezhRobertImage from "./../../../component/assets/PersonImage/viezhRobert_200x200.png";
import YessicaChristyImage from "./../../../component/assets/PersonImage/yessicaChristy_200x200.png";
import KimYoungJouImage from "./../../../component/assets/PersonImage/kimYoungJou_200x200.png";

const ReviewsSlice = createSlice({
    name: 'Reviews',
    initialState: {
        title: 'We Provide Many Features You Can Use',
        text: 'You can explore the features that we provide with fun and have their own functions each feature.',
        reviews: [
            {
                userImg: ViezhRobertImage,
                userFullName: 'Viezh Robert',
                userLocation: 'Warsaw, Poland',
                countRating: '4.5',
                title: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
            },
            {
                userImg: YessicaChristyImage,
                userFullName: 'Yessica Christy',
                userLocation: 'Shanxi, China',
                countRating: '4.5',
                title: '“I like it because I like to travel far and still can connect with high speed.”.'
            },
            {
                userImg: KimYoungJouImage,
                userFullName: 'Kim Young Jou',
                userLocation: 'Seoul, South Korea',
                countRating: '4.5',
                title: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
            },
        ]
    },
    reducer: {}
})

export default ReviewsSlice.reducer