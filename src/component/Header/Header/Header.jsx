import React from 'react'
import Logo from "../../common/Logo/Logo";
import ButtonHover from "../../common/ButtonHover/ButtonHover";
import style from './Header.module.scss'
import SettingList from "../../common/SettingList/SettingList";

const Header = props => {
    const {ListData} = props
    return <div className={style.body}>
        <Logo to={'/'}>Lasles</Logo>
        <SettingList className={style.body__list} list={ListData}/>
        <div>
            <ButtonHover>Sing In</ButtonHover>
            <ButtonHover>Sing Up</ButtonHover>
        </div>
    </div>
}

export default Header;