import React from 'react'
import style from './ButtonActive.module.scss'


const ButtonActive = ({children, ...props}) => {
    return <button className={style.ButtonActive} {...props}>{children}</button>
}

export default ButtonActive;