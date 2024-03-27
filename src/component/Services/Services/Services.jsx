import React from 'react'
import Img from './Img/Img.png'
import style from './Services.module.scss'
import ArrowIcon from './Img/Arrow_25x25.svg'

const Services = props => {
    const {title, text, services} = props.servicesData
    return <div className={style.body}>
        <div className={style.body__left}>
            <img className={style.body__left__img} src={Img} alt={Img}/>
        </div>
        <div className={style.body__right}>
            <div className={style.body__right__title}>{title}</div>
            <div className={style.body__right__text}>{text}</div>
            <div className={style.body__right__list}>
                {services.map(el => {
                    return <div className={style.body__right__list__title}>
                        <img src={ArrowIcon} alt={ArrowIcon}/>{el.name}
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Services