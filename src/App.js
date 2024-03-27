import React from 'react'
import style from './App.module.scss'
import FrontPage from "./component/FrontPage/FrontPage";
import HeaderContainer from "./component/Header/HeaderContainer";
import InfoService from "./component/InfoService/InfoService";

const App = props => {
    return (
        <div className={style.container}>
            <HeaderContainer />
            <FrontPage />
            <InfoService />
        </div>
    )
}

export default App