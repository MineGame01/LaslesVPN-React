import React from 'react';
import {connect} from "react-redux";
import Plans from "./Plans/Plans";
import {getPlansDataSelector, getPlansTitleAndTextDataSelector} from "../../redux/selectors/Selectors";

const PlansContainer = props => {
    const {plans, titleAndText} = props
    return <Plans
        plans={plans}
        titleAndText={titleAndText}
    />
}

const mapStateToProps = state => ({
    plans: getPlansDataSelector(state),
    titleAndText: getPlansTitleAndTextDataSelector(state)
})

export default connect(mapStateToProps, {})(PlansContainer)