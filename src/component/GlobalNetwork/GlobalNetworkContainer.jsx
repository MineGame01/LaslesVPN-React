import React from 'react'
import GlobalNetwork from "./GlobalNetwork/GlobalNetwork";
import {connect} from "react-redux";
import {getGlobalNetworkTitleAndTextDataSelector} from "../../redux/selectors/Selectors";

const GlobalNetworkContainer = props => {
    const {titleAndText} = props
    return <div>
        <GlobalNetwork titleAndText={titleAndText}/>
    </div>
}

const mapStateToProps = state => ({
    titleAndText: getGlobalNetworkTitleAndTextDataSelector(state)
})

export default connect(mapStateToProps, {})(GlobalNetworkContainer);