import React from 'react';
import style from './Plans.module.scss'
import Plan from "./Plan/Plan";

const Plans = props => {
    const {plans, titleAndText} = props
    return <div className={style.body}>
        <div className={style.body__text}>
            <div className={style.body__text__title}>{titleAndText.title}</div>
            <div className={style.body__text__text}>{titleAndText.text}</div>
        </div>
        <div className={style.body__plans}>
            {plans.map(el => {
                return <Plan
                    key={el.id}
                    id={el.id}
                    namePlan={el.namePlan}
                    services={el.services}
                    price={el.price}
                    image={el.image}
                    isLast={el.id === plans.length}
                />
            })}
        </div>
    </div>
}

export default Plans