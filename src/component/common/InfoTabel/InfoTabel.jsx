import React from 'react'
import style from './InfoTabel.module.scss'

const InfoTabel = ({img, count, name}) => {
    return <div className={style.body}>
        <img className={style.body__img} src={img} alt={img}/>
        <div className={style.body__right}>
            <div className={style.body__right__count}>{count + '+'}</div>
            <div className={style.body__right__name}>{name}</div>
        </div>
    </div>
}

export default InfoTabel