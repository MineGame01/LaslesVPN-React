import React from 'react'
import {connect} from "react-redux";
import Header from "./Header/Header";

class HeaderContainer extends React.Component {
    render() {
        const {ListData} = this.props
        return <div>
            <Header ListData={ListData} />
        </div>
    }
}

const mapStateToProps = state => ({
    ListData: state.HeaderComponent.ListData
})

export default connect(mapStateToProps, {})(HeaderContainer)