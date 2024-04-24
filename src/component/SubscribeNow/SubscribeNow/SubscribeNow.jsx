import React from 'react';
import style from './SubscribeNow.module.scss'
import ButtonActive from "../../common/ButtonActive/ButtonActive";

const SubscribeNow = props => {
    const {titleAndText} = props

    return <div className={style.body}>
        <div className={style.body__left}>
            <div className={style.body__left__title}>{titleAndText.title}</div>
            <div className={style.body__left__text}>{titleAndText.text}</div>
        </div>
        <div className={style.body__button}><ButtonActive>Subscribe Now</ButtonActive></div>
    </div>
}

export default SubscribeNow;