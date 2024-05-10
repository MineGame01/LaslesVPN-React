import React from "react";
import style from "./Footer.module.scss";
import Logo from "../common/Logo/Logo";
import SocialNetworkLogo from "../common/SocialNetworkLogo/SocialNetworkLogo";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import FooterNavigate from "./FooterNavigate";

const Footer = () => {
    const navigateArray = useSelector((state) => state.Footer.navigate);
    const text = useSelector((state) => state.Footer.text);

    return <div className={style.body}>
        <div className={style.body__info}>
            <Logo>Lasles</Logo>
            <div className={style.body__info__text}>
                <span>LaslesVPN</span> {text}
            </div>
            <div className={style.body__info__socialNetwork}>
                <div className={style.body__info__socialNetwork__el}>
                    <NavLink
                        to="https://www.facebook.com/"
                        target="_blank"
                    >
                        <SocialNetworkLogo type="facebook"/>
                    </NavLink>
                </div>
                <div className={style.body__info__socialNetwork__el}>
                    <NavLink
                        to="https://twitter.com/"
                        target="_blank"
                    >
                        <SocialNetworkLogo type="twitter"/>
                    </NavLink>
                </div>
                <div className={style.body__info__socialNetwork__el}>
                    <NavLink
                        to="https://www.instagram.com"
                        target="_blank"
                    >
                        <SocialNetworkLogo type="instagram"/>
                    </NavLink>
                </div>
            </div>
            <div className={style.body__info__data}>©2020Lasles<span>VPN</span></div>
        </div>
        <div className={style.body__navigate}>
            {navigateArray?.map(el => (
                <FooterNavigate title={el.title} elements={el.elements}/>
            ))}
        </div>
    </div>
}

export default Footer;