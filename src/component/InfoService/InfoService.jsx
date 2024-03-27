import React from 'react'
import style from './InfoService.module.scss'
import InfoTabel from "../common/InfoTabel/InfoTabel";
import UserImg from './Img/UserImg_55x56.svg'
import LocationImg from './Img/LocationImg_56x56.svg'
import ServerImg from './Img/ServerImg_55x56.svg'

const InfoService = (props) => {
    return <div className={style.body}>
        <div className={style.body__InfoTabel}><InfoTabel img={UserImg} count={90} name={'Users'} /></div>
        <div className={style.body__InfoTabel}><InfoTabel img={LocationImg} count={30} name={'Locations'} /></div>
        <div className={style.body__InfoTabel}><InfoTabel img={ServerImg} count={50} name={'Servers'}/></div>
    </div>
}

export default InfoService