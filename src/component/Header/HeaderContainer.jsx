import React from 'react'
import {connect} from "react-redux";
import Header from "./Header/Header";
import {getHeaderListDataSelector} from "../../redux/selectors/Selectors";

class HeaderContainer extends React.Component {
    render() {
        const {ListData} = this.props
        return <div>
            <Header ListData={ListData} />
        </div>
    }
}

const mapStateToProps = state => ({
    ListData: getHeaderListDataSelector(state)
})

export default connect(mapStateToProps, {})(HeaderContainer)