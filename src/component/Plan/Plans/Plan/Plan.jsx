import React from 'react'
import style from './Plan.module.scss'
import freePlanImage from './Image/freePlan_145x165.png'
import standartPlanImage from './Image/standartPlan_145x165.png'
import premiumPlanImage from './Image/premiumPlan_145x165.png'
import ButtonHover from "../../../common/ButtonHover/ButtonHover";
import checkMark from './../../../assets/CheckMark/checkMark_25x25.svg'

const Plan = ({id = 1, namePlan = 'No name', services, price = 0, image, isLast = false, ...props}) => {
    const namePlans = {
        freePlan: freePlanImage,
        standartPlan: standartPlanImage,
        premiumPlan: premiumPlanImage
    }
    return <div className={`${isLast && style.bodyActive} ${style.body}`} id={id}>
        <div className={style.body__up}>
            <div className={style.body__img}><img src={namePlans[image]} alt={namePlans[image]}/></div>
            <div className={style.body__name}>{namePlan}</div>
            <ul className={style.body__list}>
                {services.map(el => {
                    return <div className={style.body__list__element}>
                        <img src={checkMark} alt={checkMark}/><li
                            id={el.id}
                            key={el.id}
                        >{el.name}</li>
                    </div>
                })}
            </ul>
        </div>
        <div className={style.body__price}>{price !== 'Free' ?
            <div>{price} <span>/ mo</span></div> : price || 'No price'}</div>
        <div className={style.body__button}>
            <ButtonHover>Select</ButtonHover>
        </div>
    </div>
}

export default Plan