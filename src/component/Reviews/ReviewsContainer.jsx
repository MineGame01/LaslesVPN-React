import React from 'react';
import {connect} from "react-redux";
import {getReviewsDataSelector, getReviewsTitleAndTextDataSelector} from "../../redux/selectors/Selectors";
import Reviews from "./Reviews/Reviews";

const ReviewsContainer = props => {
    const {titleAndText, reviewsData} = props
    return <Reviews titleAndText={titleAndText} reviewsData={reviewsData}/>
}

const mapStateToProps = state => ({
    titleAndText: getReviewsTitleAndTextDataSelector(state),
    reviewsData: getReviewsDataSelector(state)
})

export default connect(mapStateToProps, null)(ReviewsContainer);