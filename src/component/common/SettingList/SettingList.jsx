import React from 'react';
import {NavLink} from "react-router-dom";

const SettingList = ({list, ...props}) => {
    if (list.length > 20) return <span>Максимальное количество 20!</span>
    return <ul {...props}>
        {list.map(el => <li>
            <NavLink
                to={el.to}
                id={el.id}
            >{el.name}</NavLink>
        </li>)}
    </ul>
}

export default SettingList;