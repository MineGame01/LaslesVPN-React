import React from 'react'
import {connect} from "react-redux";
import Services from "./Services/Services";
import {getServicesAll} from "../../redux/selectors/Selectors";

class ServicesContainer extends React.Component {
    render() {
        const {servicesData} = this.props
        return <Services servicesData={servicesData} />
    }
}

const mapStateToProps = state => ({
    servicesData: getServicesAll(state),
})

export default connect(mapStateToProps, {})(ServicesContainer)