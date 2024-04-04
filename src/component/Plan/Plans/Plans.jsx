import React from 'react';
import style from './Plans.module.scss'
import Plan from "./Plan/Plan";

const Plans = props => {
    const {plans} = props
    return <div className={style.body}>
        <div className={style.body__text}>
            <div className={style.body__text__title}>Choose Your Plan</div>
            <div className={style.body__text__text}>Let's choose the package that is best for you and explore it happily and cheerfully.</div>
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