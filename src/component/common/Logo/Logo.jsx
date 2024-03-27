import React from 'react'
import LogoImg from './img/logo.svg'
import style from './Logo.module.scss'
import {NavLink} from "react-router-dom";

const Logo = ({children, to, ...props}) => {
    return <div className={style.logo}>
        <img src={LogoImg} alt={LogoImg}/>
        <div className={style.logo__title}><NavLink to={to}>{children}<span>VPN</span></NavLink></div>
    </div>
}

export default Logo