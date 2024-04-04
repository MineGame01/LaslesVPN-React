import React from 'react';
import {connect} from "react-redux";
import Plans from "./Plans/Plans";
import {getPlansDataSelector} from "../../redux/selectors/Selectors";

const PlansContainer = props => {
    const {plans} = props
    return <Plans plans={plans}/>
}

const mapStateToProps = state => ({
    plans: getPlansDataSelector(state)
})

export default connect(mapStateToProps, {})(PlansContainer)