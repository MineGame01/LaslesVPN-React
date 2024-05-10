import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Footer.module.scss";

const FooterNavigate = ({title, elements, ...props}) => {
    return <div className={style.body__navigate__body}>
        <div className={style.body__navigate__body__title}>{title}</div>
        <ul className={style.body__navigate__body__list}>
            {elements?.map(el => (
                <li><NavLink to="/">{el}</NavLink></li>
            ))}
        </ul>
    </div>
}

export default FooterNavigate;