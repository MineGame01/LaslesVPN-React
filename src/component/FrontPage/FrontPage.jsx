import React from 'react'
import style from './FrontPage.module.scss'
import ButtonActive from "../common/ButtonActive/ButtonActive";
import FrontPageImg from './img/FronPageImg.png'

const FrontPage = props => {
    return <div className={style.body}>
        <div className={style.body__left}>
            <div className={style.body__left__title}>
                Want anything to be easy with <span>LaslesVPN.</span>
            </div>
            <div className={style.body__left__subTitle}>
                Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting
                features from us.
            </div>
            <div className={style.body__left__button}>
                <ButtonActive>Get Started</ButtonActive>
            </div>
        </div>
        <div className={style.body__right}>
            <img src={FrontPageImg} alt={FrontPageImg}/>
        </div>
    </div>
}

export default FrontPage;