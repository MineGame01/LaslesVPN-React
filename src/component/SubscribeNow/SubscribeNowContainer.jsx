import React from 'react';
import {connect} from "react-redux";
import {getSubscribeNowTitleAndTextDataSelector} from "../../redux/selectors/Selectors";
import SubscribeNow from "./SubscribeNow/SubscribeNow";

const SubscribeNowContainer = props => {
    const {titleAndText} = props

    return <SubscribeNow
        titleAndText={titleAndText}
    />
}

const mapStateToProps = state => ({
    titleAndText: getSubscribeNowTitleAndTextDataSelector(state),
})

export default connect(mapStateToProps, null)(SubscribeNowContainer);