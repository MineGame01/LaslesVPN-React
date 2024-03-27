import React from 'react'
import style from './ButtonHover.module.scss'

const ButtonHover = ({children, ...props}) => {
    return <button className={style.ButtonHover} {...props} >{children}</button>
}

export default ButtonHover;